import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dishdetail(props) {

    const { dish } = props;
    return (
        <div className="row">

            <RenderDish dish = {dish} />

        </div>
    );
}


const RenderDish = ({ dish }) => {
    if (dish != null) {
        return (
            <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1" >
                    <h4>Comments</h4>
                    < RenderComments comments = {dish.comments} />
                </div>
            </React.Fragment>
        )
    }
    else {
        return (<div></div>)
    }
}

const RenderComments = ({ comments }) => {

    if (comments != null) {
        const com = comments.map(co => {

            return (
                <React.Fragment>
                    <li>{co.comment}</li><br />
                    <li>-- {co.author}, {FormatDate(co.date)}</li><br />
                </React.Fragment>
            )

        }
        );
        return (
            <ul className="list-unstyled">
                {com}
            </ul>
        )
    }
    else {
        return (<div></div>)
    }
}

function FormatDate({ date }) {
    const option = { year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;

}

export default Dishdetail; 