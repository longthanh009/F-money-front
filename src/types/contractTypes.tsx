export type ContractType = {
  _id?: string;
  ma_hd?: string; // mã hợp đồng
  ten_khach_hang?: string; // name người vay
  cccd?: number; // căn cước công dân
  dien_thoai?: number; // số điện thoại
  dia_chi?: string; // địa chỉ
  khoan_vay?: number; // tiền khách hàng nhận được
  han_vay?: number; // bốc trong vòng
  han_tra?: string; // số ngày thanh toán 1 lần
  lai_xuat?: number; // lãi suất
  ghi_chu?: string; // ghi chú
  da_thanh_toan?: number
  han_thanh_toan?: number 
  tong_hd: number
  trang_thai: number
  con_phai_dong: number
};



// {
//   "ma_hd": "113",
//   "ten_khach_hang": "Acde",
//   "cccd":1232423425,
//   "dien_thoai":356199105,
//   "dia_chi": "HN Start",
//   "khoan_vay":5000000,
//   "lai_xuat":10,
//   "han_vay":5,
//   "han_tra":2
// }