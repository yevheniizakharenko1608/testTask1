'use strict';

window.ee = new EventEmitter();

var Test = React.createClass({

    getInitialState: function() {
        return {
            numberValue: 'Ваше число',
            m: '0',
            n: '0'
        };
    },

    numberToWord(e) {
        e.preventDefault();
        switch (e.target.elements[0].value) {
            case '0':
                this.setState({numberValue: 'ноль'});
                break;
            case '1':
                this.setState({numberValue: 'один'});
                break;
            case '2':
                this.setState({numberValue: 'два'});
                break;
            case '3':
                this.setState({numberValue: 'три'});
                break;
            case '4':
                this.setState({numberValue: 'четыре'});
                break;
            case '5':
                this.setState({numberValue: 'пять'});
                break;
            case '6':
                this.setState({numberValue: 'шесть'});
                break;
            case '7':
                this.setState({numberValue: 'семь'});
                break;
            case '8':
                this.setState({numberValue: 'восемь'});
                break;
            case '9':
                this.setState({numberValue: 'девять'});
                break;
            default:
                this.setState({numberValue: 'Пожалуйста, введите целое число от 0 до 9.'});
                break;
        }
    },

    moreOrLess(e) {
        e.preventDefault();
        if (e.target.elements[0].value > 50){
            this.setState({n: 'больше'})
        }
        else this.setState({n: 'меньше'});
        this.setState({m: e.target.elements[0].value})
    },
    
    render() {
        return (
            <div>
                <h2>Cycles TASK</h2>
                <h3>Task 1</h3>
                <form onSubmit={this.numberToWord}>
                    <input type="text" placeholder="Введите число от 0 до 9"/>
                    <button type="submit">Подтвердить</button>
                </form>
                {this.state.numberValue}
                <h3>Task 3</h3>
                <form onSubmit={this.moreOrLess}>
                    <input type="text" placeholder="Введите число для m"/>
                    <button type="submit">Подтвердить</button>
                </form>
                n = {this.state.n}
                <br />
                m = {this.state.m}
                <br />
            </div>
        )
    }
});


var App = React.createClass({
    render: function() {
        return (
                <div>
                    <Test/>
                </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);