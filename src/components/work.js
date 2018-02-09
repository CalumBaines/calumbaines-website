import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';
import styled, { css } from 'styled-components';
import SubscribeForm from './subscribe';
import ResponsiveImage from './responsiveImage';
import _ from 'lodash';

import { fetchCaseStudies } from '../actions/index';
import Asset from './asset';


const Container = styled.div`
    width: calc(100% - 48px);
    max-width: 770px;
    margin: 80px auto 0;
    padding: 0 24px;
    text-align: center;
`

const Title = styled.h1`
    margin-bottom: 24px;
`

const Para = styled.p`
    margin-top: 0;
    font-size: 18px;
    line-height: 24px;
    padding: 0 30px;
`

const WorkContent = styled.div`
  margin-bottom: 16px;
  width: 40%;

  .WorkList--Small & {
    width: 70%;
    margin: 24px auto 0;
    text-align: center;
  }
`

const WorkTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #656565;
  font-weight: 500;
  line-height: 27px;
`

const WorkPara = styled.p`
  font-size: 12px;
  color: #4A4A4A;
  line-height: 18px;
  width: 100%;
  display: block;
`
const WorkImgContainer = styled.div`
  width: calc(60% - 30px);
  margin-right: 30px;

  .WorkList--Small & {
    width: 100%;
  }

  img {
    width: 100%;
  }
`

const WorkImg = styled(Asset)`
  width: 100%;
`

const Meta = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 100%;
`

const WorkList = styled.div`
  width: calc(100% - 48px);
  max-width: 970px;
  margin: 136px auto 0;
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
`

const ExternalLink = styled.a`
  font-size: 12px;
  color: #656565;
  text-decoration: none;
`

const WorkExternal = styled.div`
  margin-top: 48px;
`

const WorkListItem = styled.div`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  background-color: #F5F5F5;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    width: calc(50% - 15px);
    padding: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &:nth-of-type(2n) {
      margin-right: 30px;
    }
  }
`

const WorkButton = styled(Link)`
  display: inline-block;
  border-radius: 30px;
  padding: 10px 32px;
  margin: 0.5rem 0;
  background: transparent;
  color: blue;
  border: 2px solid #E7E7E7;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: #4A4A4A;
  text-align: center;

  ${props => props.primary && css`
    background: #B993D6;
    border: 2px solid #B993D6;
    color: white;
  `}
`






class Work extends Component {
  componentWillMount() {
    this.props.fetchCaseStudies();
    // console.log(this.props.fetchCaseStudies());
  }
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  renderWork() {
    var workArray = this.props.caseStudies
    // console.log(workArray);
    // var removePosts = postArray.splice(0, 2)
    return workArray.map((work, index) => {
      console.log(work.fields.thumbnail.sys.id);
      // console.log(work + ' sys');
      var cls = (index !== 0) ? 'WorkList--Small' : 'item'; 

      return (
          <WorkListItem key={work.sys.id} className={ cls }>
          <WorkImgContainer>
              <WorkImg assetId={work.fields.thumbnail.sys.id} assetKey={index} />
              {/* <ResponsiveImage src={ gallery.fields.coverImage.fields.file.url } alt={ `Open Gallery ${gallery.fields.title}` }/> */}
              {/* <ResponsiveImage src={ work.fields.featuredImage.sys.id } alt={work.fields.featuredImage.fileName} /> */}
            </WorkImgContainer>
            <WorkContent>
              <WorkTitle>{work.fields.title}</WorkTitle>
              <WorkPara>{work.fields.description}</WorkPara>
              <WorkButton 
                to={"/work/" + work.fields.slug} 
                primary 
              >
                View case study
              </WorkButton>
              <WorkExternal>
                <ExternalLink href="#na">
                  Visit the live site
                </ExternalLink>
              </WorkExternal>
            </WorkContent>
          </WorkListItem>
      );
    });
  }
  render() {
    return (
      <div>
           <Container>
              <Title>Recent projects</Title>
              <Para>A selection of projects I have worked on. Ranging from large corporate organisations to small side projects.</Para>
            </Container>
            <WorkList>
              {this.renderWork()}
                <WorkListItem small className="WorkList--Small">
                  <WorkContent>
                    <WorkTitle>Looking to start a new project?</WorkTitle>
                    <WorkPara>If you have a project you think I might be interested in, please get in touch. I am always on the lookout for exciting work and great companies to collaborate with.</WorkPara>
                    <WorkButton 
                      href="#na"
                      primary 
                    >
                      Get in touch
                    </WorkButton>
                  </WorkContent>
                </WorkListItem>
            </WorkList>
            <SubscribeForm />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { caseStudies: state.work.all };
}
export default connect(mapStateToProps, { fetchCaseStudies })(Work);








// class Work extends Component {
//     componentDidMount () {
//         window.scrollTo(0, 0)
//     }
//     render() {
//         return(
//             <div>
//                 <Container>
//                     <Title>Recent projects</Title>
//                     <Para>A selection of projects I have worked on. Ranging from large corporate organisations to small side projects.</Para>
//                 </Container>
//                 <WorkList>
//                   <WorkListItem>
//                     <WorkImgContainer>
//                       <WorkImg src={kingspanWork} />
//                     </WorkImgContainer>
//                     <WorkContent>
//                       <WorkTitle>Kingspan</WorkTitle>
//                       <WorkPara>A a lacinia amet odio imperdiet cras consectetur integer habitasse euismod lobortis a hendrerit nullam ornare faucibus bibendum a.</WorkPara>
//                       <WorkButton 
//                         to={"/work/kingspan"}
//                         primary 
//                       >
//                         View case study
//                       </WorkButton>
//                       <WorkExternal>
//                         <ExternalLink href="#na">
//                           Visit the live site
//                         </ExternalLink>
//                       </WorkExternal>
//                     </WorkContent>
//                   </WorkListItem>

//                   <WorkListItem small className="WorkList--Small">
//                   <WorkImgContainer>
//                       <WorkImg src={resoneWork} />
//                     </WorkImgContainer>
//                     <WorkContent>
//                       <WorkTitle>Residence One</WorkTitle>
//                       <WorkPara>A a lacinia amet odio imperdiet cras consectetur integer habitasse euismod lobortis a hendrerit nullam ornare faucibus bibendum a.</WorkPara>
//                       <WorkButton 
//                         href="#na"
//                         primary 
//                       >
//                         View case study
//                       </WorkButton>
//                       <WorkExternal>
//                         <ExternalLink href="#na">
//                           Visit the live site
//                         </ExternalLink>
//                       </WorkExternal>
//                     </WorkContent>
//                   </WorkListItem>

//                   <WorkListItem small className="WorkList--Small">
//                   <WorkImgContainer>
//                       <WorkImg src={ruddocksWork} />
//                     </WorkImgContainer>
//                     <WorkContent>
//                       <WorkTitle>Ruddocks</WorkTitle>
//                       <WorkPara>A a lacinia amet odio imperdiet cras consectetur integer habitasse euismod lobortis a hendrerit nullam ornare faucibus bibendum a.</WorkPara>
//                       <WorkButton 
//                         href="#na"
//                         primary 
//                       >
//                         View case study
//                       </WorkButton>
//                       <WorkExternal>
//                         <ExternalLink href="#na">
//                           Visit the live site
//                         </ExternalLink>
//                       </WorkExternal>
//                     </WorkContent>
//                   </WorkListItem>

//                   <WorkListItem small className="WorkList--Small">
//                   <WorkImgContainer>
//                       <WorkImg src={jorisideWork} />
//                     </WorkImgContainer>
//                     <WorkContent>
//                       <WorkTitle>Joris Ide</WorkTitle>
//                       <WorkPara>A a lacinia amet odio imperdiet cras consectetur integer habitasse euismod lobortis a hendrerit nullam ornare faucibus bibendum a.</WorkPara>
//                       <WorkButton 
//                         href="#na"
//                         primary 
//                       >
//                         View case study
//                       </WorkButton>
//                       <WorkExternal>
//                         <ExternalLink href="#na">
//                           Visit the live site
//                         </ExternalLink>
//                       </WorkExternal>
//                     </WorkContent>
//                   </WorkListItem>

//                   <WorkListItem small className="WorkList--Small">
//                   <WorkImgContainer>
//                       <WorkImg src={interledWork} />
//                     </WorkImgContainer>
//                     <WorkContent>
//                       <WorkTitle>InterLED</WorkTitle>
//                       <WorkPara>A a lacinia amet odio imperdiet cras consectetur integer habitasse euismod lobortis a hendrerit nullam ornare faucibus bibendum a.</WorkPara>
//                       <WorkButton 
//                         href="#na"
//                         primary 
//                       >
//                         View case study
//                       </WorkButton>
//                       <WorkExternal>
//                         <ExternalLink href="#na">
//                           Visit the live site
//                         </ExternalLink>
//                       </WorkExternal>
//                     </WorkContent>
//                   </WorkListItem>

//                   <WorkListItem small className="WorkList--Small">
//                   <WorkImgContainer>
//                       <WorkImg src={qubaWork} />
//                     </WorkImgContainer>
//                     <WorkContent>
//                       <WorkTitle>Quba</WorkTitle>
//                       <WorkPara>A a lacinia amet odio imperdiet cras consectetur integer habitasse euismod lobortis a hendrerit nullam ornare faucibus bibendum a.</WorkPara>
//                       <WorkButton 
//                         href="#na"
//                         primary 
//                       >
//                         View case study
//                       </WorkButton>
//                       <WorkExternal>
//                         <ExternalLink href="#na">
//                           Visit the live site
//                         </ExternalLink>
//                       </WorkExternal>
//                     </WorkContent>
//                   </WorkListItem>

//                   <WorkListItem small className="WorkList--Small">
//                     <WorkContent>
//                       <WorkTitle>Looking to start a new project?</WorkTitle>
//                       <WorkPara>If you have a project you think I might be interested in, please get in touch. I am always on the lookout for exciting work and great companies to collaborate with.</WorkPara>
//                       <WorkButton 
//                         href="#na"
//                         primary 
//                       >
//                         Get in touch
//                       </WorkButton>
//                     </WorkContent>
//                   </WorkListItem>
//                 </WorkList>
//                 <SubscribeForm />

//             </div>
//         );
//     }
// }

// export default Work;