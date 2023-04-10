import { findByText, render, RenderResult } from '@testing-library/react'
import "@testing-library/jest-dom"
import DetailsPhoto, { getServerSideProps } from '@src/pages/details/[id]'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { photoDetails } from '@src/services/photos'



describe("Details Page", ()=> {
    
    it("should render correctly", async ()=> {
        const responseData = {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952'
        };

        const context: GetServerSidePropsContext = {
            params:{ id:'1'}
        }  as any;
        
        const { findByText } = render(<DetailsPhoto responseData={responseData} />);
        
        expect( await findByText("accusamus beatae ad facilis cum similique qui sunt")).toBeInTheDocument()

    })


})