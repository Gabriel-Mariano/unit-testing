import { fireEvent, render, waitFor, act } from '@testing-library/react'
import "@testing-library/jest-dom"
import Photos from '@src/pages/photos'
import { useRouter } from 'next/router'
import { DataPhotos, listPhotos } from '@src/services/photos'
import { Card } from '@src/components/Card'

jest.mock('next/router', () => ({
    useRouter: jest.fn()
  })
);

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

       global.fetch = jest.fn().mockResolvedValue({
        json:() =>
            Promise.resolve<DataPhotos[]>(dataMock)
       })

        render(<Photos />)

        waitFor(()=> expect(listPhotos).toHaveBeenCalled())

    })

    it("when receive one click should go to details page", async ()=> {
        const mockRouter = { push: jest.fn() };
        (useRouter as jest.Mock).mockReturnValue(mockRouter);

        const cardProps = {
            albumId: 1,
            id: '1',
            title: 'Card title',
            thumbnailUrl: 'http://example.com/image.jpg',
          };

        const { getByTestId,  } = render(<Photos />)

        const elementCard = getByTestId("card-id");
        
        act(()=> {
            // elementCard.click();
            fireEvent.click(elementCard)
        })

        await waitFor(() => { 
            expect(mockRouter.push).toHaveBeenCalledWith(`/details/${cardProps.id}`)
        }, { timeout:3000 }
        );
    })
})