import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../actions/index';

class Asset extends Component {
  componentWillMount() {
    this.props.fetchAsset(this.props.assetId)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props.assetId + ' - props')
  //   console.log(nextProps.assetId + ' - nextprops')
  //   if (this.props.assetId !== nextProps.assetId) {
  //     return true;
  //   }
  //   // if (this.state.count !== nextState.count) {
  //   //   return true;
  //   // }
  //   return false;    
  // }

  renderAsset() {
    return this.props.assets.map((asset, index) => {
      if (asset.sys.id == this.props.assetId) {

        return (
          <img src={asset.fields.file.url} alt={asset.fields.file.fileName} key={index}/>
        );
      }
    });
  }
  render() {
    return (
      <div>
        {this.renderAsset()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assets: state.assets
  };
}

export default connect(mapStateToProps, { fetchAsset })(Asset)
