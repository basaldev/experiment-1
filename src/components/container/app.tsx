import * as React from 'react';
import {
  getSnackbarVisible,
  getSnackbarContent,
  currentPage,
  getMessages,
  getDocuments,
  getSessionAttributes,
  getDiagnosis,
  getInputText,
  getDoctors,
  getSampleUsers
} from 'domain/store/selectors/main';
import { Grid, Snackbar, CssBaseline, Paper } from '@material-ui/core';
import { Navbar } from 'components/presentational/navbar';
import { ChatView } from 'components/container/chat-view';
import { DocumentsView } from 'components/container/documents-view';
import { DiagnosisView } from 'components/container/diagnosis-view';
import { ActionsView } from 'components/container/actions-view';
import { Login } from 'components/container/login';
import { onCloseSnackbar } from 'domain/middleware/user';
import { navigate } from 'domain/middleware/router';
import { css } from 'emotion';

const lexruntime = new window['AWS'].LexRuntime();

export function App() {
  const content = (pageName => {
    switch (pageName) {
      case 'HOME_PAGE':
        return (
          <ChatView
            messages={getMessages()}
            textInput={getInputText()}
            lexruntime={lexruntime}
            sessionAttributes={getSessionAttributes()}
          />
        );
      case 'SECOND_PAGE':
        return <DocumentsView documents={getDocuments()} />;
      case 'THIRD_PAGE':
        return <DiagnosisView diagnosis={getDiagnosis()} doctors={getDoctors()} />;
      case 'FOURTH_PAGE':
        return <ActionsView diagnosis={getDiagnosis()} doctors={getDoctors()} />;
      case 'LOGIN':
        return <Login sampleUsers={getSampleUsers()}/>;
      default:
        return <p>Page not found</p>;
    }
  })(currentPage().name);

  return (
    <Paper>
      <Grid container>
        <CssBaseline />
        <Grid
          item
          xs={12}
          className={css`
            min-height: 90vh;
          `}
        >
          {content}
        </Grid>
        <Grid item xs={12} style={{ display: currentPage().name !== 'LOGIN' ? 'block' : 'none'}}>
          <Navbar
            value={currentPage().value}
            routes={[
              e => {
                navigate('/', e);
              },
              e => {
                navigate('/2', e);
              },
              e => {
                navigate('/3', e);
              },
            ]}
          />
        </Grid>
        <Snackbar
          open={getSnackbarVisible()}
          message={getSnackbarContent()}
          onClose={onCloseSnackbar}
          autoHideDuration={3000}
        />
      </Grid>
    </Paper>
  );
}
