import React from 'react';
import {useHistory} from "react-router";
import './Menubar.css'

import img_work from '../../Icons/work.png';
import img_family from '../../Icons/family.png';
import img_private from '../../Icons/private.png';

function Menubar(props){

    console.log('Menubar', props.mode)

    const history = useHistory();
    const click_category = (evt) => {
        var elem_id = evt.target.id.slice(9,)
        console.log(elem_id)
        if (elem_id.startsWith('all')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'all'
                }
            })
        } else if (elem_id.startsWith('work')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'work'
                }
            })
        } else if (elem_id.startsWith('family')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'family'
                }
            })
        } else if (elem_id.startsWith('private')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'private'
                }
            })
        }
    }

    return(
        <div className = 'mainbox-sidemenu'>
            <p className = 'mainbox-sidemenu-left-text'>View by Category:</p>
            <div className = 'sidemenu-category' id = {'category-all-' + props.mode} onClick = {evt => click_category(evt)}>View all  </div>
            <div className = 'sidemenu-category' id = {'category-work-' + props.mode} onClick = {evt => click_category(evt)}>Work <img src={img_work} width = "30" /></div>
            <div className = 'sidemenu-category' id = {'category-family-' + props.mode} onClick = {evt => click_category(evt)}>Family <img src={img_family} width = "35" /></div>
            <div className = 'sidemenu-category' id = {'category-private-' + props.mode} onClick = {evt => click_category(evt)}>Private <img src={img_private} width = "28"/></div>
            <p className = 'sidemenu-left-border'></p>
            <p className = 'mainbox-sidemenu-left-text'>View as:</p>
            <div className = 'sidemenu-category' id = 'category-calendar'  onClick = {evt => history.push('./')}>Calendar</div>
            <div className = 'sidemenu-category' id = 'category-categorybox' onClick = {evt => history.push('./categorybox')} >Category Box</div>
            <p className = 'sidemenu-left-border'></p>
            <button className = 'sidemenu-category' id = 'category-project'>
                View Project Manager
            </button>
        </div>
    )
}
export default Menubar;