import { store, User } from 'domain/store/main';
import { State, Item, Page } from 'domain/store/main';

export function state(): State {
  return store.deref();
}

export function getSnackbarVisible() {
  return state().snackbarVisible;
}

export function getSnackbarContent() {
  return state().snackbarContent;
}

export function currentPage(): Page {
  return state().currentPage;
}
export function getMessages(): Array<any> {
  return state().messages;
}

export function getInputText(): string {
  return state().inputText;
}
export function getSessionAttributes(): any {
  return state().sessionAttributes;
}

export function getDocuments(): Array<any> {
  return state().documents;
}
export function getDiagnosis(): Array<any> {
  return state().diagnosis;
}

export function getDoctors(): Array<any> {
  return state().doctors;
}

export function getSampleUsers(): Array<User> {
  return state().sampleUsers;
}
