import React, { Component } from 'react';
import styles from './sidenavbar.module.css';
class SideNavBar extends Component {
    render() {
        return (
            <div className={styles.sideNavBar}>
                    <p className={styles.userName}>
                        WooYoon Lee
                        <div className={styles.nameTagColor}></div>
                    </p>
                
                <ul className={styles.menuList}>
                    <li className={styles.homeMenu}>Home</li>
                    <li className={styles.myBookMenu}>MyBook</li>
                    <li className={styles.messageMenu}>Message</li>
                    <li className={styles.settingMenu}>Setting</li>
                </ul>
            </div>
        );
    }
}

export default SideNavBar;