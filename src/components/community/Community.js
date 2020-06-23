import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "./../../redux/actions";
import CommunityItem from "./CommunityItem";
import CommunityForm from "./CommunityForm";
import { IoIosAddCircleOutline } from "react-icons/io";
import CommunityService from "./../../services/Community";
import UserService from "./../../services/User";
import { objIsChanged } from "./../../util";

class Community extends Component {
  state = {
    currentUser: {},
    myCommunities: [],
    availableCommunities: [],
  };

  static getDerivedStateFromProps(props, state) {
    return {
      currentUser: props.currentUser,
      myCommunities: props.myCommunities,
      availableCommunities: props.availableCommunities,
    };
  }

  reqCommunities = () => {
    CommunityService.getCommunitiesByUser(this.state.currentUser._id).then(
      (res) => {
        this.props.setMyCommunity(res.data.user_communities);
        this.props.setAvailableCommunity(res.data.available_communities);
      }
    );
  };

  setCommunities = (prevProps) => {
    if (objIsChanged(prevProps.currentUser, this.props.currentUser)) {
      this.reqCommunities();
    }
  };

  componentDidUpdate(prevProps) {
    this.setCommunities(prevProps);
    this.getMyCommunities(prevProps);
    this.getCurrentUser(prevProps);
    this.getAvailableCommunities(prevProps);
  }

  getMyCommunities = (prevProps) => {
    if (this.props.myCommunities.length !== prevProps.myCommunities.length) {
      this.setState({
        myCommunities: this.props.myCommunities,
      });
    }
  };

  getAvailableCommunities = (prevProps) => {
    if (
      this.props.availableCommunities.length !==
      prevProps.availableCommunities.length
    ) {
      this.setState({
        availableCommunities: this.props.availableCommunities,
      });
    }
  };

  getCurrentUser = (prevProps) => {
    if (
      Object.keys(this.props.currentUser).length !==
      Object.keys(prevProps.currentUser).length
    ) {
      this.setState({
        currentUser: this.props.currentUser,
      });
    }
  };

  onAdd = (newData) => {
    // req add community
    CommunityService.addCommunity({
      creator: this.state.currentUser._id,
      name: newData.name,
      description: newData.description,
    }).then((res) => {
      // map new user communities
      const newComm = { ...res.data, creator: this.props.currentUser };
      const updatedUserCommunitie = [
        ...this.props.currentUser.communities,
        newComm,
      ];
      // req update user
      UserService.updateUser({
        _id: this.props.currentUser._id,
        communities: updatedUserCommunitie.map((comm) => comm._id),
      }).then((res1) => {
        // update current user state
        this.props.currentUserAddComm(newComm);
        // update user communities and availbale commmunities
        this.reqCommunities();
      });
    });
  };

  onEdit = (updatedData) => {
    console.log("onEdit()...", updatedData);
    CommunityService.updateCommunity(updatedData).then((res) => {
      this.props.updateCommunity(updatedData);
      this.reqCommunities();
    });
  };

  onDelete = (comm) => {
    console.log("onDelete()...", comm);
    CommunityService.deleteCommunity(comm._id).then((res) => {
      this.props.deleteCommunity(comm._id);
      this.reqCommunities();
    });
  };

  onLeave = (comm) => {
    console.log("onLeave()...", comm);
    UserService.updateUser({
      _id: this.props.currentUser._id,
      communities: [
        ...this.props.currentUser.communities
          .filter((c) => c._id !== comm._id)
          .map((i) => i._id),
      ],
    }).then((res) => {
      this.props.currentUserRemoveComm(comm._id);
      this.reqCommunities();
    });
  };

  onJoin = (comm) => {
    console.log("onJoin()...", comm);
    UserService.updateUser({
      _id: this.props.currentUser._id,
      communities: [
        ...this.props.currentUser.communities.map((c) => c._id),
        comm._id,
      ],
    }).then((res) => {
      this.props.currentUserAddComm(comm);
      this.reqCommunities();
    });
  };

  item = (comm) => {
    return (
      <CommunityItem
        key={comm._id}
        community={comm}
        currentUser={this.state.currentUser}
        onEdit={this.onEdit}
        onLeave={this.onLeave}
        onJoin={this.onJoin}
        onDelete={this.onDelete}
      />
    );
  };

  render() {
    return (
      <div className="border p-2 m-2">
        <div className="clearfix">
          <h6 className="float-left">My Communities</h6>
          <span
            className="float-right m-1"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#communityForm"
          >
            <IoIosAddCircleOutline size="1.5em" />
          </span>
          <CommunityForm title="Create" onAdd={this.onAdd} />
        </div>
        <ul className="list-group">
          {this.state.myCommunities.map((comm) => {
            return this.item(comm);
          })}
        </ul>
        <br />
        <h6>Available Communities</h6>
        <ul className="list-group">
          {this.state.availableCommunities.map((comm) => {
            return this.item(comm);
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    myCommunities: state.community.myCommunities,
    availableCommunities: state.community.availableCommunities,
  };
};

export default connect(mapStateToProps, actions)(Community);
