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
import { postMessage } from 'domain/middleware/network';

export function onClickShare(url) {
  copy(url);
  updateSnackbarContent('Document copied to clipboard');
  updateSnackbarVisible(true);
}

function normalizeBotResponse(message: string) {
  try {
    const result = JSON.parse(message)
    return result;
  } catch (error) {
    return message;
  }
}
export function saveDianoses(issue: object) {
  //find doctor
  const doctor = getDoctors()[0];
  const newDiagnosis = {
    issue,
    doctor
  }
  updateDiagnosis(newDiagnosis);
}

//create react app
export function showResponse(botResponse) {
  // debugger
  const result = normalizeBotResponse(botResponse.result.fulfillment.speech);

  if(typeof result === 'object'){
    updateChat({
      content: Bubble(`Here are some possible diagnosis`),
      showSpeaker: true,
      direction: 'row',
      speaker: 'BOT'
    });
    updateChat({
      content: DiagnosisCard(result, true),
      showSpeaker: false,
      direction: 'row',
      speaker: 'BOT'
    });
  } else {
    updateChat({
      content: Bubble(botResponse.result.fulfillment.speech),
      showSpeaker: true,
      direction: 'row',
      speaker: 'BOT'
    });
  }
}

export function pushChat(textString, lexruntime, sessionAttributes) {
  updateChat({
    content: Bubble(textString),
    showSpeaker: true,
    direction: 'row-reverse',
    speaker: 'USER'
  });
  //send uid
  postMessage(textString).then(resp => {
    showResponse(resp);
  })
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
