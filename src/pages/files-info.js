import React from "react";
import { graphql } from  "gatsby";
import Layout from "../components/layout2"

export default ({data}) => (
	<Layout>
		<div>
			<h1>Mis imágenes</h1>
			<table>
				<thead>
                    <tr>
                        <th>name</th>
                        <th>relativePath</th>
                        <th>prettySize</th>
                    </tr>
				</thead>
                <tbody>
                    {data.allFile.edges.map(({node}, index) => (
                        <tr key={index}>
                            <td>{node.name}</td>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                        </tr>
                    ))}
                </tbody>
			</table>
		</div>
	</Layout>
)

export const query = graphql`
    query {
      allFile{
        edges{
          node{
            name
            relativePath
            prettySize
          }
        }
      }
    }
`
