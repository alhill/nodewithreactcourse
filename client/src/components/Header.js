import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent(){
		switch( this.props.auth ) {
			case null:
				return;
			case false:
				return (
					<li><a className="waves-effect waves-light btn" href="/auth/google">Login With Google</a></li>
				);
			default:
				return (
					<div>
						<li><Link className="waves-effect waves-light btn" to={ '/surveys' }>List</Link></li>
						<li><a className="waves-effect waves-light btn" href="/api/logout">Logout</a></li>
					</div>
				);
		}
	}
	render() {
		return (
 			<nav>
				<div className="nav-wrapper">
					<Link style={{paddingLeft: '1rem'}} className="left brand-logo" to={ '/' }>Formulario</Link>
					<ul className="right">
						{ this.renderContent() }
					</ul>
				</div>
  		</nav>
		);
	}
}

function mapStateToProps({ auth }){
	return { auth };
}

export default connect(mapStateToProps)(Header);