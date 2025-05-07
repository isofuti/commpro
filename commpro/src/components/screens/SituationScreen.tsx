import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'framer-motion';

const Screen = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 1136px;
  margin: 0 auto;
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1.5rem 0.75rem;
    max-width: 98vw;
  }
  @media (max-width: 768px) {
    padding: 1rem 0.25rem;
    border-radius: 0.75rem;
  }
`;

const AnaliticsDoc = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const CommentBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 40px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const Avatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--color-gray);
  overflow: hidden;
  flex-shrink: 0;
`;

const CommentText = styled.div`
  flex: 1;
`;

const CommentTitle = styled.div`
  font-family: 'Days One', sans-serif;
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const CommentBody = styled.div`
  color: var(--color-light);
  font-size: 1.12rem;
  line-height: 1.5;
`;

const ExpertName = styled.div`
  font-weight: 700;
  margin-top: 12px;
  color: var(--color-light);
`;

const ExpertRole = styled.div`
  color: var(--color-gray);
  font-size: 1em;
`;

const Block = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const BlockTitle = styled.div`
  font-family: 'Days One', sans-serif;
  font-weight: 700;
  color: var(--color-primary);
  font-size: 1.18em;
  margin-bottom: 16px;
`;

const PillRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const shakeAnim = keyframes`
  0% { transform: translateX(0); }
  15% { transform: translateX(-4px); }
  30% { transform: translateX(4px); }
  45% { transform: translateX(-3px); }
  60% { transform: translateX(3px); }
  75% { transform: translateX(-2px); }
  90% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

const Pill = styled.div<{
  active?: boolean;
  color?: string;
  shake?: boolean;
}>`
  padding: 12px 32px;
  border-radius: 999px;
  background: ${({active, color}) => active ? color || 'var(--color-primary)' : 'rgba(255,255,255,0.10)'};
  color: ${({active}) => active ? '#fff' : 'var(--color-light)'};
  font-weight: 700;
  font-size: 1.1em;
  font-family: 'Roboto Flex', Arial, sans-serif;
  box-shadow: ${({active}) => active ? '0 2px 12px rgba(124,176,250,0.15)' : 'none'};
  user-select: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  cursor: ${({active}) => active ? 'pointer' : 'default'};
  ${({shake}) => shake && css`
    animation: ${shakeAnim} 0.7s cubic-bezier(.36,.07,.19,.97) both;
  `}
  &:hover {
    ${({active}) => active && css`
      animation: ${shakeAnim} 0.7s cubic-bezier(.36,.07,.19,.97) both;
    `}
  }
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 1em;
  }
`;

const NegDesc = styled.div`
  color: #ffb3b3;
  font-size: 1em;
  margin-top: 10px;
`;

const UserDesc = styled.div`
  color: var(--color-primary);
  font-size: 1em;
  margin-top: 10px;
`;

// --- Reputation Bar ---
const repAnim = keyframes`
  from { width: 0; }
  to { width: 50%; }
`;

const RepBarWrap = styled.div`
  margin: 44px 0 24px 0;
  width: 100%;
`;
const RepBarBg = styled.div`
  height: 22px;
  background: rgba(255,255,255,0.13);
  border-radius: 14px;
  position: relative;
  box-shadow: 0 1px 8px rgba(24,110,180,0.08);
`;
const RepBarFill = styled.div<{percent: number}>`
  height: 100%;
  border-radius: 14px;
  background: linear-gradient(90deg, #ff4d4f 0%, #ffb300 40%, var(--color-primary) 100%);
  width: ${({percent}) => percent}%;
  transition: width 2.5s cubic-bezier(.7,.2,.3,1);
  position: absolute;
  left: 0; top: 0;
`;
const RepBarLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.15em;
  color: var(--color-light);
  margin-top: 10px;
  font-family: 'Days One', sans-serif;
`;
const RepBarDot = styled.div<{active?: boolean; pos?: string}>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({active}) => active ? 'var(--color-primary)' : 'rgba(255,255,255,0.18)'};
  border: 4px solid ${({active}) => active ? 'var(--color-primary)' : 'rgba(255,255,255,0.18)'};
  position: absolute;
  top: 50%;
  left: ${({pos}) => pos || 0};
  transform: translate(-50%, -50%);
  transition: left 2.5s cubic-bezier(.7,.2,.3,1), background 0.3s, border 0.3s;
  box-shadow: ${({active}) => active ? '0 0 18px 2px #7cb0fa88' : 'none'};
`;

// --- Table ---
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 16px;
  margin-top: 36px;
  @media (max-width: 768px) {
    font-size: 0.95em;
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    font-size: 0.9em;
    margin-top: 10px;
  }
`;
const Th = styled.th`
  text-align: center;
  font-family: 'Days One', sans-serif;
  font-weight: 700;
  color: var(--color-primary);
  padding: 12px 14px;
  background: rgba(255,255,255,0.13);
  border-radius: 14px 14px 0 0;
`;
const Td = styled.td`
  padding: 16px 14px;
  background: rgba(255,255,255,0.10);
  border-radius: 14px;
  font-size: 1.12em;
  color: var(--color-light);
  font-family: 'Roboto Flex', Arial, sans-serif;
  box-shadow: 0 1px 4px rgba(24,110,180,0.06);
  text-align: center;
  vertical-align: middle;
`;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Icon = styled.span<{ok?: boolean; cross?: boolean}>`
  font-size: 1.4em;
  color: ${({ok, cross}) => ok ? 'var(--color-primary)' : cross ? '#ff4d4f' : 'var(--color-gray)'};
`;

// --- Данные ---
const repPercent = 50; // 2.5 из 5
const repDotPos = '50%';
// Показатели: 'cross', 'check', 'both'
const tableRows: [string, 'cross'|'check'|'both'][] = [
  ['Сформированная поисковая выдача', 'cross'],
  ['Актуальные отзывы', 'cross'],
  ['Актуальная информация о компании', 'check'],
  ['Наличие официальных представительств', 'check'],
  ['Использование ТОП-овых площадок обсуждений', 'both'],
  ['Отсутствие черного пиара со стороны конкурентов', 'check'],
  ['Отсутствие накрутки положительных отзывов', 'check'],
  ['Высокие рейтинги на площадках', 'both'],
];

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

const SituationScreen = () => {
  const barRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true });
  const [bar, setBar] = React.useState(0);
  const [dot, setDot] = React.useState('0%');
  const negLevel: 'низкий'|'средний'|'высокий' = 'высокий';
  const userAct: 'низкая'|'средняя'|'высокая' = 'низкая';
  const [shakeNeg, setShakeNeg] = React.useState(true);
  const [shakeUser, setShakeUser] = React.useState(true);

  React.useEffect(() => {
    if (isInView) {
      setBar(0);
      setDot('0%');
      setTimeout(() => {
        setBar(repPercent);
        setDot(repDotPos);
      }, 200);
    }
    // Сбросить shake через 1.2s после mount
    const t1 = setTimeout(() => setShakeNeg(false), 1200);
    const t2 = setTimeout(() => setShakeUser(false), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]);

  return (
    <Screen>
      <Title>Ситуация в сети:</Title>
      <AnaliticsDoc>
        По результатам анализа поисковой выдачи
      </AnaliticsDoc>
      <GlassCard>
        <CommentBlock>
          <Avatar>
            {/* Фото специалиста вставьте сюда <img src="/images/expert.jpg" alt="Эксперт" width="72" height="72" /> */}
          </Avatar>
          <CommentText>
            <CommentTitle>Комментарий:</CommentTitle>
            <CommentBody>
              Поисковая выдача наполнена нерелевантными площадками, не относящимися к исследуемому объекту. На найденных площадках, большинство отзывов и комментариев потеряли актуальность и остались необработанными от лица представителя. Необходимо провести работы по размещению новых позитивных отзывов, отработать негативные упоминания от лица официального представителя, актуализировать информацию на площадках обсуждения и зарегистрировать объект на ТОПовых площадках обсуждения. Это позволит повысить упоминаемость в сети, а также сформировать положительное инфополе и перекрыть негатив на незадействованных в работе площадках.
            </CommentBody>
            <ExpertName>Евгений Козырев</ExpertName>
            <ExpertRole>Директор</ExpertRole>
          </CommentText>
        </CommentBlock>

        <Block>
          <BlockTitle>Уровень негатива:</BlockTitle>
          <PillRow>
            <Pill color="#b2e672">низкий</Pill>
            <Pill color="#ffb300">средний</Pill>
            <Pill color="#ff4d4f" active shake={shakeNeg} onMouseEnter={()=>setShakeNeg(true)} onAnimationEnd={()=>setShakeNeg(false)}>высокий</Pill>
          </PillRow>
          <NegDesc>Высокий — общая доля негативных высказываний превышает 50%</NegDesc>
        </Block>

        <Block>
          <BlockTitle>Активность пользователей:</BlockTitle>
          <PillRow>
            <Pill color="var(--color-primary)" active shake={shakeUser} onMouseEnter={()=>setShakeUser(true)} onAnimationEnd={()=>setShakeUser(false)}>низкая</Pill>
            <Pill color="#ffb300">средняя</Pill>
            <Pill color="var(--color-accent)">высокая</Pill>
          </PillRow>
          <UserDesc>Низкая — подавляющее большинство отзывов, комментариев и диалогов устарело и потеряло актуальность. Новые обсуждения появляются крайне редко</UserDesc>
        </Block>

        <Block>
          <BlockTitle>Оценка состояния репутации:</BlockTitle>
          <RepBarWrap ref={barRef}>
            <RepBarBg>
              <RepBarFill percent={bar} />
              <RepBarDot pos={dot} active />
            </RepBarBg>
            <RepBarLabels>
              {[1,2,3,4,5].map(i => <span key={i}>{i}</span>)}
            </RepBarLabels>
          </RepBarWrap>
        </Block>

        <Block>
          <Table>
            <thead>
              <tr>
                <Th>Показатели</Th>
                <Th>Статус</Th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(([label, status], i) => (
                <tr key={i}>
                  <Td>{label}</Td>
                  <Td>
                    <IconWrap>
                      {(status === 'cross' || status === 'both') && <Icon cross>❌</Icon>}
                      {(status === 'check' || status === 'both') && <Icon ok>✔️</Icon>}
                    </IconWrap>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Block>
      </GlassCard>
    </Screen>
  );
};

export default SituationScreen; 