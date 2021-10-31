import React, { Component } from 'react'
import AuthService from "../services/auth.service";
import './Zaawar.css';
const Zaawar= ()=>{
    const currentUser = AuthService.getCurrentUser();

        return (
            
            <div class="container" className="bg-dark text-white">
            <div id="content" class="content p-0">
                <div class="profile-header">
                    <div class="profile-header-cover"></div>
            
                    <div class="profile-header-content " className="bg-dark text-white">
                        <div class="profile-header-img">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                        </div>
            
                        <div class="profile-header-info">
                            <h4 class="m-t-sm">{currentUser.username}</h4>
                            <p class="m-b-sm">  <ul className="bg-dark text-white">
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul></p>
                            <a href="#" class="btn btn-xs btn-primary mb-3">Мэдээллээ засах</a>
                        </div>
                    </div>
        
                </div>
            
                <div class="profile-container">
                    <div class="row row-space-20">
                        <div class="col-md-8">
                            <div class="tab-content p-0">
                                <div class="tab-pane active show" id="profile-about">
                                    <table class="table table-profile">
                                        <thead>
                                            <tr>
                                                <th colspan="2" className="text-white">Ажил боловсрол</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-white">
                                                <td class="field">Ажил</td>
                                                <td class="value">
                                                    <div className="text-white" class="m-b-5">
                                                        <b>Монгол хэл бичгийн судлаач</b> <a href="#" class="m-l-10">Edit</a><br />
                                                        <span class="text-muted">Эрдэмтэн</span>
                                                    </div>
                                                   
                                                </td>
                                            </tr>
                                            <tr className="text-white" >
                                                <td class="field">Боловсрол</td>
                                                <td class="value">
                                                    <div class="m-b-5">
                                                        <b>University (2009)</b> <a href="#" class="m-l-10">Edit</a><br />
                                                        <span class="text-muted">University of Georgia, Athens, GA</span>
                                                    </div>
                                                    <div>
                                                        <b>High School (2006)</b> <a href="#" class="m-l-10">Edit</a><br />
                                                        <span class="text-muted">Heritage High School, West Chestter, PA</span>
                                                    </div>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                    <table className="text-white" class="table table-profile">
                                        <thead>
                                            <tr className="text-white">
                                                <th colspan="2">Холбоо барих мэдээлэл</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-white">
                                                <td class="field">Утас</td>
                                                <td class="value">
                                                   85600133 {' '}
                                                    <a href="#" class="m-l-10">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="text-white">
                                                <td class="field">Цахим шуудан</td>
                                                <td class="value">
                                                {currentUser.email} {' '}
                                                    <a href="#" class="m-l-10">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="text-white">
                                                <td class="field">Нийгмийн сүлжээ</td>
                                                <td class="value">
                                                    http://facebook.com/infinite.admin{' '}
                                                    <a href="#" class="m-l-10">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="text-white">
                                                <td class="field">Website</td>
                                                <td class="value">
                                                    http://seantheme.com{' '}
                                                    <a href="#" class="m-l-10">Edit</a>
                                                </td>
                                            </tr>
                                            <tr className="text-white">
                                                <td class="field">Address</td>
                                                <td class="value">
                                                    Twitter, Inc. <a href="#" class="m-l-10">Edit</a><br />
                                                    1355 Market Street, Suite 900<br />
                                                    San Francisco, CA 94103
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-profile">
                                        <thead>
                                            <tr className="text-white">
                                                <th colspan="2" >Үндсэн мэдээлэл</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-white">
                                                <td class="field">Төрсөн өдөр</td>
                                                <td class="value">
                                                    May 11, 1999{' '}
                                                    <a href="#" class="m-l-10">Засах</a>
                                                </td>
                                            </tr>
                                            <tr className="text-white">
                                                <td class="field">Хүйс</td>
                                                <td class="value">
                                                    Эмэгтэй{' '}
                                                    <a href="#" class="m-l-10">Засах</a>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-md-4 hidden-xs hidden-sm">
                            <ul class="profile-info-list">
                                <li class="title">Ерөнхий мэдээлэл</li>
                                <li>
                                    <div class="field">Имэйл хаяг:</div>
                                    <div class="value">{currentUser.email}</div>
                                </li>
                                <li>
                                    <div class="field">Хэрэглэгчиийн нэр</div>
                                    <div class="value">{currentUser.username}</div>
                                </li>
                                <li>
                                    <div class="field">Хариуцсан үүрэг</div>
                                    <div class="value">{currentUser.roles}</div>
                                </li>
                                
                                    
                                <li>
                                    <div class="field">Phone No.:</div>
                                    <div class="value">
                                        85600133
                                    </div>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        )
    }
    export default Zaawar;
