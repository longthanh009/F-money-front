export type MortgageType = {
  _id?: string;
  ma_hd?: string; // mã hợp đồng
  nguoi_tao_hd: string // ng
  ten_khach_hang?: string; // name người vay
  cccd?: number; // căn cước công dân
  dien_thoai?: number; // số điện thoại
  dia_chi?: string; // địa chỉ
  tin_chap?: number; // Thế Chấp
  khoan_vay?: number; // tiền khách hàng nhận được
  lai_phi?: number; // lãi suất
  han_vay?: number; // bốc trong vòng
  ky_lai_phi: string // 10 ngày đóng lãi phí 1 lần thì điền số 10
  ngay_vay?: string
  ghi_chu?: string; // ghi chú
  //
  da_thanh_toan?: number;
  han_thanh_toan?: number;
  tong_hd: number;
  trang_thai: number;
  con_phai_dong: number;
};
