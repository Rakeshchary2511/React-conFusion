import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Dishdetail(props) {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <RenderComments comments={props.comments} />
                </div>
            </div >
        </div>
    );
}


const RenderDish = ({ dish }) => {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

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
                    <li>-- {co.author}, <FormatDate date = {co.date}/> </li><br />
                </React.Fragment>
            );
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