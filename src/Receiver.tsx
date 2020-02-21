import React from 'react';

interface OwnProps {
    whatYouWrote: string,
}

interface OwnState {

}

export default class Receiver extends React.Component<OwnProps>  {

    private readonly receiverCssStyle = {
        marginTop: '100px',
        width: '18rem'
    };

    render(): React.ReactNode {
        return (
            <div className="card" style= {this.receiverCssStyle }>
                <div className="card-body">
                    <h5 className="card-title">You wrote:</h5>
                        <p className="card-text">{ this.props.whatYouWrote }</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    };
}

