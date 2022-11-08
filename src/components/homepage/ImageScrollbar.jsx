import {useContext} from 'react';
import {Box,Icon,Flex,Image} from '@chakra-ui/react';
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
// import Property from '../../components/homepage/Property';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginRight='1'>
        <Icon
          as={FaArrowAltCircleLeft}
          onClick={() => scrollPrev()}
          fontSize='2xl'
          cursor='pointer'
        //   d={['none','none','none','block']}
        />
      </Flex>
    );
}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginLeft='1'>
        <Icon
          as={FaArrowAltCircleRight}
          onClick={() => scrollNext()}
          fontSize='2xl'
          cursor='pointer'
        //   d={['none','none','none','block']}
      />
      </Flex>
    );
  }
const ImageScrollbar= ({propertiesforsale,otherPhotos}) => {
  const photoList = propertiesforsale.otherPhotos.split(',');

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
       {/* <Image 
                alt='property'
                placeholder="blur"
                // blurDataURL={photo} 
                src={propertiesforsale.photos} width={1000}
                height={500}  
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
         /> */}

        {photoList.map((otherPhotos,index) =>(
        <Box width='910px' otherphotos={otherPhotos} key={index} overflow='hidden' p='1'>
          <Image 
            alt='Rent image'
            placeholder="blur"
            // blurDataURL={photo} 
            src={otherPhotos} width={1000}
            height={500}  
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" 
          />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar;