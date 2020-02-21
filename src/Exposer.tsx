import React from 'react';

interface OwnProps {
    callbackFunction: (arg0: string) => void;
}

interface OwnState {

}

export default class Exposer extends React.Component<OwnProps>  {

    private readonly exposerCssStyle = {
        marginTop: '100px',
    };

    onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        const inputValue = e.currentTarget.value;
        this.props.callbackFunction( inputValue );
    }

    render(): React.ReactNode {
        return (
            <form style={ this.exposerCssStyle }>
                <div className="form-group">
                    <label htmlFor="exposer">Expose this:</label>
                    <input type="text" 
                           onChange={ this.onChangeHandler }
                           className="form-control" 
                           id="exposer" 
                           placeholder="Enter text here." />
                </div>
            </form>
        )
    };
}

