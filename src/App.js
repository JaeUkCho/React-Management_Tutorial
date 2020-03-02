import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/any/1',
    name: '조재욱',
    birthday: '920127',
    gender: '남자',
    job: 'Qoo10'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/any/2',
    name: '김상현',
    birthday: '911103',
    gender: '남자',
    job: '한솔케미칼'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/any/3',
    name: '이동욱',
    birthday: '920203',
    gender: '남자',
    job: '청담 이유'
  }
]

class App extends Component {
    render() {
      return (
        <div>
          {
            customers.map(c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              )
            })
          }        
        </div>       
      );
    }
}

export default App;
