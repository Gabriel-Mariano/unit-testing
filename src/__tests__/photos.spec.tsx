import { fireEvent, render, waitFor, act, getByText, findByTestId } from '@testing-library/react'
import "@testing-library/jest-dom"
import Photos from '@src/pages/photos'
import { useRouter } from 'next/router'
import { DataPhotos, listPhotos } from '@src/services/photos'
import { QueryClient, QueryClientProvider } from 'react-query'

jest.fn(listPhotos)

describe("Page Photo", ()=> {
    it("should render correctly", async ()=> {
        const dataMock = [
            {
                albumId: 1,
                id: 3,
                title: "officia porro iure quia iusto qui ipsa ut modi",
                url: "https://via.placeholder.com/600/24f355",
                thumbnailUrl: "https://via.placeholder.com/150/24f355"
            }
        ]

        const queryClient = new QueryClient();
       
        render(
            <QueryClientProvider client={queryClient}>
                <Photos />
            </QueryClientProvider>
        )

        global.fetch = jest.fn().mockResolvedValue({
            json:() =>
                Promise.resolve<DataPhotos[]>(dataMock)
        })

        waitFor(()=> expect(listPhotos).toHaveBeenCalled())

    })

    it("when receive one click should go to details page", async ()=> {
        // const mockRouter = { push: jest.fn() };
        // (useRouter as jest.Mock).mockReturnValue(mockRouter);

        const mockPush = jest.fn();
        // (useRouter as jest.Mock).mockReturnValue({
        //     push: mockPush
        // });

        const cardProps = {
            albumId: 1,
            id: '1',
            title: 'Card title',
            thumbnailUrl: 'http://example.com/image.jpg',
          };
        
        const queryClient = new QueryClient();

        const { findByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <Photos />
            </QueryClientProvider>
        )

        const elementCard = await findByTestId("card-id");
        
        // elementCard.click();
        fireEvent.click(elementCard)
      
        // waitFor(()=> expect(mockRouter.push).toHaveBeenCalledWith(`/details/${cardProps.id}`))
        waitFor(()=> expect(mockPush).toHaveBeenCalledWith(`/details/${cardProps.id}`))
    })
})