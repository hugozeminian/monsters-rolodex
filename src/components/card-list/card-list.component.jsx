/*
******* EXAMPLE USING FUNCTIONAL COMPONENTS *******
** HOOKS **
*/
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);


/*
******* EXAMPLE USING CLASS COMPONENTS *******
*/
// import { Component } from 'react';
// import Card from '../card/card.component';
// import './card-list.styles.css';

// class CardList extends Component {
//     render(){
//         const { monsters } = this.props

//         return( 
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     return(
//                         <Card monster={monster} />
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList