import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({url}) {
    let selectedCategoryId = url.searchParams.get('selectedCategoryId') || null;
    let where = ''
    if(selectedCategoryId !== null){
        where = `, where: {categories_some: {id: "${selectedCategoryId}"}}`
    }
    
    let query = gql`
    query VisualThinking {
        methods(first: 100 ${where}) {
            id
            slug
            title
            categories {
                title
                id
            }
            template {
                url(transformation: {document: {output: {format: webp}}})
                height
                width
            }
        }
    }`;

    return await hygraph.request(query);
}

