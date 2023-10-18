import { Flex, Img, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

function App() {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {showLogo ? (
        <Flex height="100vh" justifyContent="center" alignItems="center">
          <Img src="/assets/logo.svg" />
        </Flex>
      ) : (
        <Flex height="100vh" justifyContent="center" alignItems="center">
          <Text>Some Text</Text>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      )}
    </>
  )
}

export default App
