export type IMortgageType = {
  _id?: string;
  ma_hd?: string; // mã hợp đồng
  nguoi_tao_hd: string; // ng
  ten_khach_hang?: string; // name người vay
  cccd?: number; // căn cước công dân
  dien_thoai?: number; // số điện thoại
  dia_chi?: string; // địa chỉ
  thong_tin?: number; // Thế Chấp
  khoan_vay?: number; // khoann vay
  da_thanh_toan?: number; // đã thanh toán
  tong_hd?: number; // tiền khách hàng nhận được
  phi_dv?: number; // phi dv
  han_vay?: number; // bốc trong vòng
  han_hd?: string; // ngày trả
  ghi_chu?: string; // ghi chú
  status: number; // trạng thái
};

  // {
  //   "nguoi_tao_hd": "636a2127a281e92df41190ee",
  //   "ma_hd": "HD7",
  //   "ten_khach_hang": "Nguyen Van A",
  //   "cccd":1232423425,
  //   "dien_thoai":84356199105,
  //   "dia_chi": "Hà Nội 2",
  //   "khoan_vay":5000000,
  //   "phi_dv":10,
  //   "han_vay":30,
  //   "thong_tin":"aaaa",
  //   "tong_hd":2
  // }