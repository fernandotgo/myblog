//twin peaks
import React from 'react';
import Layout from '../components/layout2';
import {Link} from 'gatsby';
import styled from 'styled-components';
import imgFer from  '../images/pic.png';
import { graphql } from 'gatsby';

const UserWrapper = styled.div `
    display: flex;
    align-items: center;
    margin: 0, auto, 12px, auto;
`
const Avatar = styled.img `
    flex: 0 0 96px;
    width: 96px;
    margin: 0;
`
const Description = styled.div `
    flex: 1;
    margin-left: 18px;
    padding: 12px;
`

const Username = styled.div`
    margin: 0 0 12px 0;
`

const Excerpt = styled.p`
    margin: 0;
`

const User = props => (
    <UserWrapper>
        <Avatar src={props.avatar} alt="" />
        <Description>
            <Username>{props.username}</Username>
            <Excerpt>{props.excerpt}</Excerpt>
        </Description>
    </UserWrapper>
)


const About = ({data}) => (
    <Layout>
        <div>
            <h1>Acerca de</h1>
            <br />
            <User 
                username={data.site.siteMetadata.author}
                avatar={imgFer}
                excerpt={data.site.siteMetadata.description}
            /> 
            <Link to={data.site.siteMetadata.website} >Al sitio de Claro</Link>
        </div>
    </Layout>
)

export const query = graphql`
    query {
      site{
        siteMetadata {
              title
              description
              author
              website
            }
        }
    }
`

export default About;
