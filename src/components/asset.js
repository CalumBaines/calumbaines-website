import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../actions/index';
import styled, { css } from 'styled-components';


const RespImg = styled.img`
    width: 100%;
`


class Asset extends Component {


  componentWillMount() {
    this.props.fetchAsset(this.props.assetId)
    // console.log(this.props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props.assetKey + ' - props')
    // console.log(nextProps.assetId + ' - nextprops')
    // console.log(nextState + ' - nextstate')
    return true;
    // if (nextState == null) {
    //   return true;
    // } 
        // const differentTitle = this.props.title !== nextProps.title;
        // const differentDone = this.props.done !== nextProps.done
        // return differentTitle || differentDone;
  }

  renderAsset() {
    var assetArray = this.props.assets;

    console.log(assetArray)
    var idx = 0;
    return assetArray.map((asset, index) => {
      console.log(index)
      // console.log(asset.sys.id + ' sys.id ' + asset.fields.file.fileName)
      // console.log(this.props.assetId + ' asset.id ' + asset.fields.file.fileName)
      if (asset.sys.id == this.props.assetId) {
        return (
          <RespImg src={asset.fields.file.url} alt={asset.fields.file.fileName} key={index}/>
        );
      }
    });
  }
  render() {
    return (
      <div className="asset">
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
