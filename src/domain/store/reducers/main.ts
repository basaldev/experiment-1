import { getLogger } from 'domain/logger';
import { store, State, Page } from 'domain/store/main';
import { normaliseDocuments } from 'domain/normalisers';

const logger = getLogger('State');

export function updateCurrentPage(currentPage: Page): State {
  logger.debug(`Update current page ${currentPage.name}`);
  return store.swap(oldState => ({ ...oldState, currentPage }));
}

export function updateInputText(inputText: string): State {
  return store.swap(oldState => ({ ...oldState, inputText }));
}

export function updatesessionAttributes(sessionAttributes: any): State {
  logger.debug(`Update sessionAttributes `, sessionAttributes);
  return store.swap(oldState => ({
    ...oldState,
    sessionAttributes,
  }));
}

export function updateChat(message: any):State {
  return store.swap(oldState => ({
    ...oldState,
    messages: [...oldState.messages, message],
  }));
}

export function updateDiagnosis(newDiagnosis: any):State {
  return store.swap(oldState => ({
    ...oldState,
    diagnosis: [...oldState.diagnosis, newDiagnosis],
  }));
}

export function updateCurrentUser(user: { id: string; token: string }): State {
  logger.info('User update', user);
  return store.swap(oldState => ({
    ...oldState,
    user,
  }));
}

export function updateUserDocuments(userDocuments): State  {
  logger.info('Adding documents');
  return store.swap(oldState => ({
    ...oldState,
    documents: userDocuments.map(normaliseDocuments),
  }));
}

export function updateSnackbarVisible(snackbarVisible): State  {
  return store.swap(oldState => ({
    ...oldState,
    snackbarVisible,
  }));
}

export function updateSnackbarContent(snackbarContent): State  {
  return store.swap(oldState => ({
    ...oldState,
    snackbarContent,
  }));
}
