import React from 'react';
import headShot from '../../img/headShot.jpg'
import {GrStar} from 'react-icons/gr';
import {Card, Media, Image} from 'react-bootstrap';
import { IconContext } from "react-icons";

class ReviewCard extends React.Component{
  makeCards(){
    var cards =[];
    for (let i = 0; i < this.props.num; i++) {
      cards.push(card);
    }
    return cards.map((v, i) => <div key={i}>{v}</div>);
  }
  render(){
    return this.makeCards();
  }
}

export default ReviewCard;

const imgHolder = {
  "width": "75px",
  "height": "75px"
}

var card = <Card>
            <Card.Body>
              <Media>
                <Image
                  width={64}
                  height={64}
                  className="mr-3"
                  style={imgHolder}
                  src={headShot}
                  alt="Generic placeholder"
                  roundedCircle
                  />
                <Media.Body>
                  <IconContext.Provider value={{color: "gold"}}>
                    <GrStar/><GrStar/><GrStar/><GrStar/><GrStar/>
                  </IconContext.Provider>
                  <p>
                    Cras sit amet nibh libero.
                  </p>
                </Media.Body>
              </Media>
            </Card.Body>
          </Card>;