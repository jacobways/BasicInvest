const createSectionEle = require('../templates/chartSection')
const createSectionExplainEle = require('../templates/chartSection_explain')
const createSectionMonthlyEle = require('../templates/chartSectionMonthly')
const createSectionMonthlyExplainEle = require('../templates/chartSectionMonthly_explain')
const EmploymentChart = require('../chart/employmentrate')
const EmploymentChartExplain = require('../chartExplain/employmentrate')
const DowChart = require('../chart/Dow')
const NasdaqChart = require('../chart/Nasdaq')
const PMIChart = require('../chart/PMI')
const VIXChart = require('../chart/VIX')
const SpreadChart = require('../chart/tenMinusTwo')

module.exports = async function createUSAHTML () {

  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = '미국 지표'

  const span = document.createElement('span')
  span.textContent = '아래 지표들은 주로 미래를 예측하는 선행지표입니다.'

  const sectionEmploy = await createSectionMonthlyExplainEle('미국 실업률', 'ChartEmployment', 'EmploymentChart', EmploymentChart, EmploymentChartExplain)

  // const sectionEmploy = document.createElement('section')
  // const h3Employ = document.createElement('h3')
  // h3Employ.textContent = '고용 지표'
  // sectionEmploy.append(h3Employ)

  const sectionPMI = createSectionMonthlyEle('ISM 제조업 지수 (PMI)', 'ChartPMI', 'PMIChart', PMIChart)

  const sectionSpread = createSectionEle('10년물 - 2년물 국채 금리차', 'ChartSpread', 'SpreadChart', SpreadChart)

  const sectionDOW = createSectionEle('다우존스 지수', 'ChartDow', 'DowChart', DowChart)

  const sectionNasdaq = createSectionEle('나스닥 지수', 'ChartNasdaq', 'NasdaqChart', NasdaqChart)

  const sectionVIX = createSectionEle('공포 지수 (VIX)', 'ChartVIX', 'VIXChart', VIXChart)

  main.append(
    h1,
    document.createElement('br'),
    span,
    document.createElement('br'),
    sectionEmploy,
    document.createElement('br'),
    sectionPMI,
    document.createElement('br'),
    sectionSpread,
    document.createElement('br'),
    sectionDOW,
    document.createElement('br'),
    sectionNasdaq,
    document.createElement('br'),
    sectionVIX,
  )

  return main;
}

