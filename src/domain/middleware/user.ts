import page from 'page';
import copy from 'copy-to-clipboard';
import { firestore } from 'domain/firebase';
import * as filestack from 'filestack-js';
import {
  updateChat,
  updateInputText,
  updatesessionAttributes,
  updateDiagnosis,
  updateSnackbarVisible,
  updateSnackbarContent,
  updateCurrentUser,
} from 'domain/store/reducers/main';
import { getDoctors } from 'domain/store/selectors/main';
import { DiagnosisCard } from 'components/presentational/diagnosis-card';
import { Bubble } from 'components/presentational/bubble';
import { store } from 'domain/store/main';
import { getImages } from './router';

export function onClickShare(url) {
  copy(url);
  updateSnackbarContent('Document copied to clipboard');
  updateSnackbarVisible(true);
}

function normalizeLexResponse(message: string) {
  return JSON.parse(message);
}

export function saveDianoses(issue: object) {
  const doctor = getDoctors();
  const newDiagnosis = {
    issue,
    doctor,
  };
  updateDiagnosis(newDiagnosis);
  page('/3');
}

export function showResponse(lexResponse) {
  if (lexResponse.dialogState === 'Fulfilled') {
    updateChat({
      content: DiagnosisCard(normalizeLexResponse(lexResponse.message), true),
      showSpeaker: true,
      direction: 'row',
      speaker: 'BOT',
    });
  } else {
    if (lexResponse.message) {
      updateChat({
        content: Bubble(lexResponse.message),
        showSpeaker: true,
        direction: 'row',
        speaker: 'BOT',
      });
    }
    if (lexResponse.dialogState === 'ReadyForFulfillment') {
      console.log('Ready For Fulfillment');
      // TODO:  show slot values
    } else {
      console.log(lexResponse.dialogState);
    }
  }
}

export function pushChat(textString, lexruntime, sessionAttributes) {
  const params = {
    botAlias: '$LATEST',
    botName: 'Tere',
    inputText: textString,
    userId: 'tere-thursday',
    sessionAttributes: sessionAttributes,
  };
  updateChat({
    content: Bubble(textString),
    showSpeaker: true,
    direction: 'row-reverse',
    speaker: 'USER',
  });
  lexruntime.postText(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    if (data) {
      // capture the sessionAttributes for the next cycle
      updatesessionAttributes(data.sessionAttributes);
      // show response and/or error/dialog status
      showResponse(data);
    }
    //Clean value
  });
}

export function onKeyPressUpdateInputText(e) {
  updateInputText(e.target.value);
  return e.target;
}

export function scrollbottom(container) {
  container.scrollTop = container.scrollHeight;
}

export function onClickUploadDocument(event) {
  const client = filestack.init('AWc0bpovCRWqA1MDqiKU1z');
  client
    .picker({
      maxFiles: 20,
      uploadInBackground: false,
      onOpen: () => console.log('opened'),
      storeTo: {
        container: 'devportal-customers-assets',
        path: 'user-uploads/',
        region: 'us-east-1',
      },
      onUploadDone: (res: any) => {
        const state = store.deref();
        const { id } = state.user;
        const { mimetype, url, handle, filename } = res.filesUploaded[0];

        firestore
          .collection('userDocuments')
          .add({
            filestackId: handle,
            mimetype,
            url,
            name: filename,
            userId: id
          })
          .then((docRef) => {
            getImages();
            updateSnackbarContent('Document scanned and saved to Database');
            updateSnackbarVisible(true);
          })
          .catch((error) => {
            console.log('Couldnt add doc: ', error);
          });
      },
    })
    .open();
}

export function onCloseSnackbar() {
  updateSnackbarVisible(false);
}

export function onChangeCurrentUser(user) {
  updateCurrentUser(user);
  page('/');
}
