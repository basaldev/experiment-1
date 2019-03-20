import * as React from 'react';
import { css } from 'emotion';
import { scrollbottom } from 'domain/middleware/user';
import { Message } from 'components/presentational/message';
import { Grid } from '@material-ui/core';
import { MessageInput } from 'components/presentational/message-input';
import * as Doctor from 'assets/doc.png';

export class ChatView extends React.Component {
  props: {
    sessionAttributes: any;
    textInput: string;
    lexruntime: any;
    messages: Array<any>;
  };
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    scrollbottom(this.refs.scrollContainer);
  }
  render() {
    return (
      <div>
        <Grid container direction="column" justify="space-between">
          <Grid item xs={12}>
          <div ref="scrollContainer"
            className={css`
              overflow: scroll;
              min-height: 80vh;
              padding: 16px;
            `}
          >
            {this.props.messages.map(message => {
              return Message(message.direction, message.showSpeaker, message.content, message.speaker);
            })}
            </div>
          </Grid>
          <Grid item xs={12}>
          <MessageInput
            scrollContainer={this.refs.scrollContainer}
            sessionAttributes={this.props.sessionAttributes}
            textInput={this.props.textInput}
            lexruntime={this.props.lexruntime}
          />
        </Grid>
        </Grid>
      </div>
    );
  }
}
