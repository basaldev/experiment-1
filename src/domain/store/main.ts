import { createAtom } from 'js-atom';
import { Bubble } from 'components/presentational/bubble';

export type HomePage = { name: 'HOME_PAGE' };
export type SecondPage = { name: 'SECOND_PAGE' };
export type ThirdPage = { name: 'THIRD_PAGE' };
export type FourthPage = { name: 'FOURTH_PAGE' };
export type Login = { name: 'LOGIN' };

export type Page = HomePage | SecondPage | ThirdPage | FourthPage | Login;

export type Item = { name: string; url: string };
export type User = { name?: string; id: string; avatar?: string; age?: number };
export type State = {
  currentPage: Page;
  allItems: Array<Item>;
  filteredItems: Array<Item>;
  messages: Array<any>;
  documents: Array<any>;
  diagnosis: Array<any>;
  doctors: Array<any>;
  loading: boolean;
  inputText: string;
  sessionAttributes: any;
  snackbarVisible: boolean;
  snackbarContent: string;
  user?: {
    id: string;
  };
  sampleUsers: Array<User>;
};

const defaultState: State = {
  sampleUsers: [
    {
      name: 'user one',
      id: 'xd0ktRwSbthgZJOMKxBn44potD52',
      avatar: '',
      age: 21,
    },
    {
      name: 'user two',
      id: 'y48Udj8T5Pf7r402LX2qYqNUYmz2',
      avatar: '',
      age: 59,
    },
  ],
  currentPage: { name: 'HOME_PAGE' },
  allItems: [],
  filteredItems: [],
  messages: [
    {
      content: Bubble('Hi, How can I help you today?'),
      showSpeaker: true,
      direction: 'row',
      speaker: 'BOT',
    },
  ],
  inputText: '',
  documents: [],
  diagnosis: [],
  doctors: [
    {
      img: `https://picsum.photos/450/454/?random`,
      title: 'Image',
      cols: 2,
    },
  ],
  loading: true,
  sessionAttributes: {},
  snackbarVisible: false,
  snackbarContent: '',
  user: {
    id: '',
  },
};

interface Atom {
  swap: (oldState: any) => State;
  deref: () => State;
  addWatch: (x, y) => void;
}

export const store: Atom = createAtom(defaultState);

window['__STATE__'] = store;
