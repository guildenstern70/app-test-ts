
import React from 'react';
import Exposer from './Exposer';
import Receiver from './Receiver';

interface OwnProps 
{

}

interface OwnState
{
    whatYouWroteInExposer: string;
}

export default class Main extends React.Component<OwnProps, OwnState> {

    constructor(props: OwnProps)
    {
        super(props);
        this.state = {
            whatYouWroteInExposer: String.fromCharCode(parseInt('263A', 16)),
        }
    }

    private receiverHandler = (youWrote: string): void => {
        console.log('You typed: ' + youWrote);
        this.setState({
            whatYouWroteInExposer: youWrote,
        })
    }

    render(): React.ReactNode {
        return (

            <div className="row">
              <div className="col-sm">
                <Exposer callbackFunction={ this.receiverHandler } />
              </div>
              <div className="col-sm">
                &nbsp;
              </div>
              <div className="col-sm"> /
                <Receiver whatYouWrote={ this.state.whatYouWroteInExposer } />
              </div>
            </div>

        )
    };

};

