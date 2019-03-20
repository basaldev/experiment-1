import * as React from 'react';
import { Grid, Paper, IconButton, TextField, InputAdornment } from '@material-ui/core';
import { css } from 'emotion';
import { updateInputText } from 'domain/store/reducers/main'; //TODO move to user middleware;
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { onKeyPressUpdateInputText, pushChat } from 'domain/middleware/user';
export class MessageInput extends React.Component {
  props: {
    sessionAttributes: any;
    textInput: string;
    lexruntime: any;
    scrollContainer: any;
  };
  state: {
    inputRef: any;
  };
  constructor(props) {
    super(props);
    this.state = {
      inputRef: null,
    };
  }

  handleOnSend = () => {
    if (this.props.textInput !== '') {
      pushChat(this.props.textInput, this.props.lexruntime, this.props.sessionAttributes);
      updateInputText('');
      this.state.inputRef.value = '';
    }
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            placeholder="Send a message"
            onKeyUp={e => {
              this.setState({ inputRef: onKeyPressUpdateInputText(e) });
            }}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.handleOnSend}
                  >
                    <MicIcon />
                  </IconButton>
                  <IconButton
                    onClick={this.handleOnSend}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    );
  }
}
