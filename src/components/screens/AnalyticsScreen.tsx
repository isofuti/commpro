import React from 'react';
import styled from 'styled-components';
import { analyticsTables, TableCell, AnalyticsTable } from '../../data/analytics-tables';

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  width: 1136px;
  max-width: 100vw;
  margin: 0 auto;
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    width: 95vw;
    padding: 1.5rem;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-light);
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 3px 8px;
  margin-top: 1rem;
  background: transparent;
  table-layout: fixed;
  width: 100%;
`;

const BaseCell = styled.td<{ isInfo?: boolean }>`
  padding: 2px 2px;
  background: rgba(255,255,255,0.10);
  border-radius: 10px;
  font-size: 0.8em;
  color: var(--color-light);
  font-family: 'Roboto Flex', Arial, sans-serif;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 1.4;
  box-sizing: border-box;
  white-space: normal;
`;

const BaseHeader = styled.th<{ isInfo?: boolean }>`
  padding: 2px 2px;
  background: rgba(255,255,255,0.18);
  border-radius: 10px;
  font-size: 0.9em;
  color: var(--color-light);
  font-family: 'Roboto Flex', Arial, sans-serif;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 1.4;
  box-sizing: border-box;
  white-space: normal;
`;

// Стили для каждого столбца
const Col1 = styled(BaseCell)`
  width: 30px;
  min-width: 30px;
  max-width: 30px;
`;

const Col2 = styled(BaseCell)`
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: auto;
  cursor: pointer;
`;

const Col3 = styled(BaseCell)`
  width: 90px;
  min-width: 90px;
  max-width: 90px;
`;

const Col4 = styled(BaseCell)`
  width: 70px;
  min-width: 70px;
  max-width: 70px;
`;

const Col5 = styled(BaseCell)`
  width: 110px;
  min-width: 110px;
  max-width: 110px;
`;

const Col6 = styled(BaseCell)`
  width: 60px;
  min-width: 60px;
  max-width: 60px;
`;

const Col7 = styled(BaseCell)`
  width: 586px;
  min-width: 586px;
  max-width: 586px;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

// Стили для заголовков
const Header1 = styled(BaseHeader)`
  width: 30px;
  min-width: 30px;
  max-width: 30px;
`;

const Header2 = styled(BaseHeader)`
  width: 140px;
  min-width: 140px;
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Header3 = styled(BaseHeader)`
  width: 100px;
  min-width: 100px;
  max-width: 100px;
`;

const Header4 = styled(BaseHeader)`
  width: 80px;
  min-width: 80px;
  max-width: 80px;
`;

const Header5 = styled(BaseHeader)`
  width: 115px;
  min-width: 115px;
  max-width: 115px;
`;

const Header6 = styled(BaseHeader)`
  width: 70px;
  min-width: 70px;
  max-width: 70px;
`;

const Header7 = styled(BaseHeader)`
  width: 600px;
  min-width: 600px;
  max-width: 600px;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

const SpacerRow = styled.tr`
  height: 24px;
  td {
    background: transparent;
    padding: 0;
  }
`;

const TableBlock = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--color-light);
  margin-bottom: 0.5em;
  margin-top: 0;
`;

const Section2Col1 = styled(BaseCell)`
  width: 533px;
  min-width: 533px;
  max-width: 533px;
  overflow-wrap: break-word;
  word-break: break-word;
  text-align: right;
`;

const Section2Col2 = styled(BaseCell)`
  width: 533px;
  min-width: 533px;
  max-width: 533px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

function AnalyticsScreen() {
  const allRows: TableCell[][] = analyticsTables[0].data;
  const section1 = allRows.slice(0, 3);
  const section2 = allRows.slice(3, 11)
    .filter(row => (row[0]?.value?.trim() || row[4]?.value?.trim()));
  const section3 = allRows.slice(11);
  const sections = [
    { name: '', data: section1 },
    { name: '', data: section2 },
    { name: '', data: section3 },
  ];
  const table = analyticsTables[0];

  const getCellComponent = (i: number, j: number, isInfo: boolean) => {
    const components = [
      [Header1, Header2, Header3, Header4, Header5, Header6, Header7],
      [Col1, Col2, Col3, Col4, Col5, Col6, Col7]
    ];
    return components[i < 2 ? 0 : 1][j];
  };

  return (
    <GlassCard>
      <Title>Аналитика</Title>
      {sections.map((section, sectionIdx) =>
        section.data && section.data.length > 0 ? (
          <TableBlock key={sectionIdx}>
            <SectionTitle>{section.name}</SectionTitle>
            <TableContainer>
              <Table>
                <tbody>
                  {section.data.map((row, i) => (
                    <tr key={i}>
                      {sectionIdx === 1 ? (
                        <>
                          <Section2Col1 colSpan={row[0]?.colspan}>
                            {row[0]?.value
                              ?.replace(/(Да|Нет|Да\/Нет)(?=\s|$)/g, '$1<br/>')
                              ?.replace(/\n/g, '<br/>')
                              ? <span dangerouslySetInnerHTML={{ __html: row[0]?.value
                                .replace(/(Да|Нет|Да\/Нет)(?=\s|$)/g, '$1<br/>')
                                .replace(/\n/g, '<br/>') }} />
                              : null}
                          </Section2Col1>
                          <Section2Col2 colSpan={row[4]?.colspan}>{row[4]?.value}</Section2Col2>
                        </>
                      ) : (
                        sectionIdx === 2 ? [
                          <Col1 key="col1">{row[0]?.value || ''}</Col1>,
                          <Col2 key="col2">
                            {row[1]?.value && typeof row[1].value === 'string' && row[1].value.startsWith('http') ? (
                              <a href={row[1].value} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{row[1].value}</a>
                            ) : (
                              row[1]?.value || ''
                            )}
                          </Col2>,
                          <Col3 key="col3">{row[2]?.value || ''}</Col3>,
                          <Col4 key="col4">{row[3]?.value || ''}</Col4>,
                          <Col5 key="col5">{row[4]?.value || ''}</Col5>,
                          <Col6 key="col6">{row[5]?.value || ''}</Col6>,
                          <Col7 key="col7">{row[6]?.value || ''}</Col7>
                        ] : (
                          row.map((cell, j) => {
                            let CellComponent = getCellComponent(i, j, i === 5);
                            if (sectionIdx === 1 && j === 0) CellComponent = Section2Col1;
                            if (sectionIdx === 1 && j === 1) CellComponent = Section2Col2;
                            if (j === 1 && typeof cell.value === 'string' && cell.value.startsWith('http')) {
                              return (
                                <CellComponent
                                  key={j}
                                  colSpan={cell.colspan}
                                  rowSpan={cell.rowspan}
                                  isInfo={i === 5}
                                >
                                  <a href={cell.value} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{cell.value}</a>
                                </CellComponent>
                              );
                            }
                            return (
                              <CellComponent
                                key={j}
                                colSpan={cell.colspan}
                                rowSpan={cell.rowspan}
                                isInfo={i === 5}
                              >
                                {cell.value}
                              </CellComponent>
                            );
                          })
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </TableBlock>
        ) : null
      )}
    </GlassCard>
  );
}

export default AnalyticsScreen; 