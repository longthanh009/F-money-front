import React, { useState, useEffect } from "react";
import WelcomeBanner from "../../components/Lender/dashboard/WelcomeBanner";
import DashboardCard01 from "../../components/Lender/dashboard/DashboardCard01";
import DashboardCard02 from "../../components/Lender/dashboard/DashboardCard02";
import { useAppDispatch } from "../../app/hooks";
import BreadcrumbComponent from "../../components/Breadcrumb";
import { DatePicker } from "antd";
import moment from "moment";
import ReactApexChart from "react-apexcharts";
import { turnoverContractMonth } from "../../api/contract";
import { turnoverContractMgMonth } from "../../api/mortgage";

function Dashboard() {
  const dispatch = useAppDispatch()
  const [tragop, setTragop] = useState(0)
  const [tinchap, setTinchap] = useState(0)
  const [tienlaiTinchap, setTienlaiTinChap] = useState(0)
  const [tienlaiTraGop, setTienlaiTraGop] = useState(0)
  const [coutHDTC, setCoutHDTC] = useState(0)
  const [coutHDCG, setCoutHDCG] = useState(0)
  const [dataTC, setDataTC] = useState<[]>([])
  const [dataCG, setDataCG] = useState<[]>([])
  const [dataPriceTC, setDataPriceTC] = useState<[]>([])
  const [dataPriceCG, setDataPriceCG] = useState<[]>([])
  const [chartYear, setChartYear] = useState(moment().format("YYYY"));
  const onChangeYearChart = (date: any, dateString: any) => {
    setChartYear(dateString);
  };
  let dataChart = {
    series: [{
      name: 'Tín chấp',
      data: dataTC
    }, {
      name: 'Trả góp',
      data: dataCG
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      },
      yaxis: {
        title: {
          text: 'Số lượng'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val + " Hợp đồng"
          }
        }
      }
    },
  }
  let dataChartPrice = {
    series: [{
      name: 'Tín chấp',
      data: dataPriceTC
    }, {
      name: 'Trả góp',
      data: dataPriceCG
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      },
      yaxis: {
        title: {
          text: 'VND'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val.toLocaleString('vi', {style : 'currency', currency : 'VND'}) + " VND"
          }
        }
      }
    },
  }
  useEffect(() => {
    const getDataaContract = async () => {
      const { data } = await turnoverContractMonth(chartYear)
      setTragop(data.tong_cho_vay)
      setTienlaiTraGop(data.tong_tien_lai);
      setCoutHDCG(data.tong_sl)
      let arrData = []
      let arrPrice = []
      const coutData = data.data
      for (let index = 0; index < coutData.length; index++) {
        const element = coutData[index];
        arrData.push(element.so_luong_hd)
        arrPrice.push(element.tien_cho_vay)
      }
      setDataPriceCG(arrPrice)
      setDataCG(arrData)
    }
    getDataaContract();
    const getDataaContractMg = async () => {
      const { data } = await turnoverContractMgMonth(chartYear)
      setTinchap(data.tong_cho_vay);
      setTienlaiTinChap(data.tong_tien_lai)
      setCoutHDTC(data.tong_sl)
      let arrData = []
      let arrPrice = []
      const coutData = data.data
      for (let index = 0; index < coutData.length; index++) {
        const element = coutData[index];
        arrData.push(element.so_luong_hd)
        arrPrice.push(element.tien_cho_vay)
      }
      setDataPriceTC(arrPrice)
      setDataTC(arrData)
    }
    getDataaContractMg();
  }, [chartYear])
  return (
    <>
      <div className="block mb-[10px]">
        <DatePicker
          value={chartYear == "" ? null : moment(chartYear)}
          placeholder="Lọc năm"
          status="warning"
          style={{ float: "right", marginLeft: "3px" }}
          onChange={onChangeYearChart}
          picker="year"
        />
      </div>
      <div>
        <BreadcrumbComponent />
        {/* Welcome banner */}
        <WelcomeBanner />
        {/* Dashboard actions */}
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Acme Plus) */}
          <DashboardCard01 tragop={tragop} tinchap={tinchap} title ="Tiền Cho Vay"/>
          <DashboardCard01 tragop={tienlaiTraGop} tinchap={tienlaiTinchap} title ="Lợi Nhuận"/>
          <DashboardCard02  tinChap={coutHDTC} traGop={coutHDCG} title ="Tống Số Hợp Đồng"/>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div id="chart" className="mt-[20px]">
            <h2 className="text-center text-[16px]">Số lượng hợp đồng trong năm {chartYear}(Số lượng)</h2>
            <ReactApexChart options={dataChart.options} series={dataChart.series} type="bar" height={350} />
          </div>
          <div id="chart" className="mt-[20px]">
            <h2 className="text-center text-[16px]">Tiền cho vay trong năm {chartYear} (VND)</h2>
            <ReactApexChart options={dataChartPrice.options} series={dataChartPrice.series} type="bar" height={350} />
          </div>
        </div>

        {/* <DashboardCard05 tragop={tragop} tienlaiTraGop={tienlaiTraGop} /> */}
        {/* Table (Top Channels) */}
        {/* <DashboardCard06 /> */}
      </div>
    </>
  );
}

export default Dashboard;
