import { Card } from "@src/components/Card";

export default function DetailsPhoto () {
    return (
        <Card 
            title={'item.title'} 
            albumId={1} 
            thumbnailUrl={'item.thumbnailUrl'}
        />
    )
}