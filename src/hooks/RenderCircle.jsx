import { Circle, useMediaQuery, Text } from "@chakra-ui/react";

function RenderCircle(text, index, isLast) {
    const [isSmallScreen] = useMediaQuery('(max-width: 1137px)');
    const offset = isSmallScreen ? index * 260 : index * 340;
    return (
      <Circle
        key={text}
        size={isSmallScreen ? '353px' : '412px'}
        border="2px solid white"
        position={!isLast ? 'absolute' : 'relative'}
        left={!isSmallScreen && index !== 0 ? `${offset}px` : undefined}
        top={isSmallScreen && index !== 0 ? `${offset}px` : undefined}
        zIndex={isLast ? 1 : 0}>
        <Text color="white" fontSize="lg" p={4}>
          {text}
        </Text>
      </Circle>
    );
  };

export default RenderCircle;