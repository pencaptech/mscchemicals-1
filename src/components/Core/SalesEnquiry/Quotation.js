import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react';
import 'react-datetime/css/react-datetime.css';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import swal from 'sweetalert';
import * as Const from '../../Common/constants';
import Upload from '../Common/Upload';
import AddQuotation from './AddQuotation';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';







// const json2csv = require('json2csv').parse;

class Quotation extends Component {
    state = {
        activeTab: 0,
        editFlag: false,
        modal: false,
        obj: '',
        baseUrl: 'sales-quotation',
        currentId: '',
    }


    loadObj(id) {
        axios.get(Const.server_url + Const.context_path + "api/sales-quotation?enquiry.id=" + id + '&projection=sales_quotation_edit').then(res => {
            var list = res.data._embedded[Object.keys(res.data._embedded)[0]];

            if(list.length) {
                this.setState({ obj: list[0], currentId: list[0].id });
            }
        });
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    componentDidMount() {
        // console.log('quotation component did mount');
        console.log(this.props.currentId);

       
        this.loadObj(this.props.currentId);
        this.props.onRef(this);
    }

    updateObj() {
        if(this.state.obj) {
            this.setState({ editFlag: true }, () => {
                this.addTemplateRef.updateObj(this.state.currentId);
            })
        } else {
            this.setState({ editFlag: true });
        }
    }

    saveSuccess(id) {
        this.setState({ editFlag: false });
        this.loadObj(this.props.currentId);
    }

    cancelSave = () => {
        this.setState({ editFlag: false });
    }

    sendEmail = (i) => {
        var obj = this.state.obj;
        var prod = this.props.parentObj.products[i];

        axios.patch(Const.server_url + Const.context_path + "quotations/" + obj.id + "/products/" + prod.id)
            .then(res => {
                prod.status = 'Email Sent';
                this.setState({ obj });
                swal("Sent Quotation!", 'Succesfully sent quotation mail.', "success");
            }).finally(() => {
                this.setState({ loading: false });
            }).catch(err => {
                swal("Unable to Patch!", err.response.data.globalErrors[0], "error");
            })
    }

    render() {
        return (
            <div>
                {!this.state.editFlag &&
                    <div className="row">
                        <div className="col-md-12">
                            {/* <Upload onRef={ref => (this.uploadRef = ref)} fileFrom={this.props.baseUrl + '-quotation'} 
                            currentId={this.props.currentId} fileTypes={[{label: 'Attachment', expiryDate: true }]}></Upload> */}
 
                                 
                            {this.state.obj &&
                            <div className="card b">
                                <div className="card-header">
                                <Button title="Status" variant="contained" style={{textTransform: "none"}} color="" onClick={() => this.updateObj()}> Status</Button>
                                          <div className="float-right ">
                                      <Button title="Edit" style={{right: -50}} color="primary" onClick={() => this.updateObj()}> < EditIcon style={{color: "#000"}} size="small" /></Button>
                                    
                               
                                    {/* {this.props.parentObj.products.map((product, i) => {
                                            return (
                                                
                                                   
                                                     
                                                        <Button key={i} variant="contained" color="primary" size="sm" onClick={() => this.sendEmail(i)}><EmailIcon fontSize="small"style={{color:'#fff'}}></EmailIcon> </Button>
                                                     
                                                )
                                            })} */}
                                   
                                 
                                    <Button  title=" SendEmail "style={{right: -30}} color="primary" onClick={() => this.sendEmail()}> <EmailIcon style={{ color: '#000' }} color="primary" size="large" /></Button>
                                    <Button title="Convert order" style={{right: -1}} color="#3f51b5" > <AssignmentSharpIcon /></Button>
                         
                                
                                          </div>
                                          <div className=" mt-2" style={{right: 1}}>
                                          
                                          </div>
                                    <h4 className="my-2">
                                        <span>{this.state.obj.name}</span>
                                    </h4>
                                </div>
                                <div className="row  card-body bb bt">
                                    <table className="col-sm-7 table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Code</strong>
                                                </td>
                                                <td>{this.state.obj.code}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Company</strong>
                                                </td>
                                                <td>
                                                    <Link to={`/companies/${this.state.obj.company.id}`}>
                                                        {this.state.obj.company.name}
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Specification</strong>
                                                </td>
                                                <td>{this.state.obj.specification}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Makes</strong>
                                                </td>
                                                <td>{this.state.obj.make}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Payment Terms</strong>
                                                </td>
                                                <td>{this.state.obj.terms}</td>
                                            </tr>
                                           {/* <tr>
                                                <td>
                                                    <strong>Transportation Charger</strong>
                                                </td>
                                                <td>{this.state.obj.transportationCharges}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Packing</strong>
                                                </td>
                                                <td>{this.state.obj.packing}</td>
                                            </tr>
                                       
                                            <tr>
                                                <td>
                                                    <strong>Delivery Period</strong>
                                                </td>
                                                <td>{this.state.obj.deliveryPeriod} days</td>
                                            </tr>*/}
                                             <tr>
                                                <td>
                                                    <strong>GST</strong>
                                                </td>
                                                <td>{this.state.obj.gst}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Valid Till</strong>
                                                </td>
                                                <td><Moment format="DD MMM YY">{this.state.obj.valiTill}</Moment></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <Divider />
                                    <div className=" row text-left mt-4">
                                        <div className="col-sm-12" >
                                        <h4 style={{fontSize: 18,flexDirection: 'row',marginLeft: 12}}>Products </h4>
                                   
                                        </div>
                                        
                                    </div>
                                    <Divider />
                                    <Divider />
                                    <div className="row">
                                        <div className="col-sm-12">
                                    <Table  hover responsive>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                {/* <th>Actions</th> */}
                                            </tr>
                                        </thead>
                                        {this.state.obj.products &&
                                        <tbody>
                                        {this.props.parentObj.products.map((product, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td className="va-middle">{i + 1}</td>
                                                    <td>
                                                        <Link to={`/products/${product.product.id}`}>
                                                            {product.product.name}
                                                        </Link>
                                                    </td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.amount}</td>
                                                    <td>
                                                        {!product.status && '-NA-'}
                                                        {product.status && <span className="badge badge-success">{product.status}</span>}
                                                    </td>
                                                     {/* <td>
                                                        <Button variant="contained" color="primary" size="sm" onClick={() => this.sendEmail(i)}><EmailIcon fontSize="small"style={{color:'#fff'}}></EmailIcon> </Button>
                                                    </td>  */}
                                                </tr>)
                                            })}
                                        </tbody>}
                                    </Table>
                                    </div>
                                </div>
                            </div>}
                            {!this.state.obj &&
                            <div className="text-center">
                                {this.props.user.permissions.indexOf(Const.MG_SE_E) >=0 && <Button variant="contained" color="warning" size="xs" onClick={() => this.updateObj()}>Generate Quotation</Button>}
                            </div>}
                        </div>
                    </div>}
                {this.state.editFlag &&
                    <div className="card b">
                        <div className="card-body bb bt">
                            <AddQuotation baseUrl={this.state.baseUrl} currentId={this.state.currentId} parentObj={this.props.parentObj}
                            onRef={ref => (this.addTemplateRef = ref)} onSave={(id) => this.saveSuccess(id)} onCancel={this.cancelSave}></AddQuotation>
                        </div>
                    </div>}
            </div>)
    }
}

const mapStateToProps = state => ({
    settings: state.settings,
    user: state.login.userObj
})

export default connect(
    mapStateToProps
)(Quotation);