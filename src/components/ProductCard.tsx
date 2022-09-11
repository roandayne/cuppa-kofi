import { Badge, Card, Group, Image, Text } from '@mantine/core'
import React from 'react'

interface ProductCardProps {
  imgSrc: string,
  description: string, 
  name: string
}

const ProductCard: React.FC<ProductCardProps> = ({imgSrc, description, name}) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder sx={{margin: "0 20px"}}>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src={imgSrc}
          height={"100%"}
          alt="bestseller"
        />
      </Card.Section>
      <Group sx={{display: "flex", flexDirection: "column"}} mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Badge color="pink" variant="light">
          Bestseller
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">
        {description}
      </Text>
    </Card>
  )
}

export default ProductCard