import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <React.Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <React.Fragment>has</React.Fragment>
      ) : (
        <React.Fragment>
          <p>You have not set up a profile</p>
          <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = ({ profile, auth }) => ({
  auth,
  profile,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
