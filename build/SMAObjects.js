"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SMAObjects {
}
SMAObjects.KEYS = {
    Operation_Health: {
        obj: "6180",
        lri: "08214800"
    },
    Operation_Evt_Msg: {
        obj: "6180",
        lri: "08414900"
    },
    Operation_Evt_EvtNo: {
        obj: "6100",
        lri: "00418000"
    },
    Status_Update: {
        obj: "6180",
        lri: "08412900"
    },
    Nsm_Status: {
        obj: "6180",
        lri: "08522F00"
    },
    Name_Location: {
        obj: "6800",
        lri: "10821E00"
    },
    Name_SerialNum: {
        obj: "6800",
        lri: "00A21E00"
    },
    Name_Model: {
        obj: "6800",
        lri: "08822000"
    },
    Name_PkgRev: {
        obj: "6800",
        lri: "00823400"
    },
    Name_PkgUpRev: {
        obj: "6800",
        lri: "00823500"
    },
    Auto_UpdateOn: {
        obj: "6800",
        lri: "08839500"
    },
    Inverter_WLim: {
        obj: "6800",
        lri: "00832A00"
    },
    GridMs_TotW_Cur: {
        obj: "6100",
        lri: "40263F00"
    },
    GridMs_TotVAr_Cur: {
        obj: "6100",
        lri: "40665F00"
    },
    Operation_Dmd_PFCtl: {
        obj: "6180",
        lri: "00522900"
    },
    Operation_Dmd_PFExtCtl: {
        obj: "6180",
        lri: "08522A00"
    },
    Energy_Meter: {
        obj: "6800",
        lri: "008AA300"
    },
    Energy_Meter_Add: {
        obj: "6800",
        lri: "008AA200"
    },
    EnergyMeter_Status: {
        obj: "6180",
        lri: "084AAA00"
    },
    Self_Test: {
        obj: "6802",
        lri: "08833A00"
    },
    Self_Test_Dmd: {
        obj: "6802",
        lri: "08833900"
    },
    Inverter_WMax: {
        obj: "6802",
        lri: "00832B00"
    },
    Inverter_W: {
        obj: "6802",
        lri: "00924200"
    },
    Inverter_WNom: {
        obj: "6802",
        lri: "00924300"
    },
    GridGuard_Cntry_LoginMdt: {
        obj: "6802",
        lri: "08872000"
    },
    Sys_InitOk: {
        obj: "6800",
        lri: "08811F00"
    },
    Spdwr_ActlIp: {
        obj: "6180",
        lri: "104A9A00"
    },
    Spdwr_ComSocAStt: {
        obj: "6180",
        lri: "084A9600"
    },
    Spdwr_ComSocBStt: {
        obj: "6180",
        lri: "084A9800"
    },
    Spdwr_AutoCfgIsOn: {
        obj: "6800",
        lri: "088A8A00"
    },
    Spdwr_Ip: {
        obj: "6800",
        lri: "10AA6100"
    },
    Spdwr_SnetMsk: {
        obj: "6800",
        lri: "10AA6200"
    },
    Spdwr_GwIp: {
        obj: "6800",
        lri: "10AA6300"
    },
    Spdwr_DnsSrvIp: {
        obj: "6800",
        lri: "10AA6400"
    },
    Eth_Proxy_IsOn: {
        obj: "6800",
        lri: "088B1E00"
    },
    Eth_Proxy_Login: {
        obj: "6800",
        lri: "108B2100"
    },
    Eth_Proxy_Port: {
        obj: "6800",
        lri: "008B1F00"
    },
    Eth_Proxy_Pwd: {
        obj: "6800",
        lri: "108B2200"
    },
    Eth_Proxy_Srv: {
        obj: "6800",
        lri: "108B2000"
    },
    Wl_Ssid: {
        obj: "6800",
        lri: "108A4E00"
    },
    Wl_Ssid_Sec: {
        obj: "6800",
        lri: "108A5900"
    },
    Wl_IsOn: {
        obj: "6800",
        lri: "088A4C00"
    },
    Wl_Psk: {
        obj: "6800",
        lri: "108A4F00"
    },
    Wl_Psk_Sec: {
        obj: "6800",
        lri: "108A5A00"
    },
    Wl_Encryption: {
        obj: "6800",
        lri: "088A5000"
    },
    Wl_Encryption_Sec: {
        obj: "6800",
        lri: "088A5B00"
    },
    Wl_AutoCfgIsOn: {
        obj: "6800",
        lri: "088A5200"
    },
    Wl_Scan: {
        obj: "6800",
        lri: "088AA500"
    },
    Wl_ScanStt: {
        obj: "6180",
        lri: "084ABB00"
    },
    Wl_Ip: {
        obj: "6800",
        lri: "108A5300"
    },
    Wl_SnetMsk: {
        obj: "6800",
        lri: "108A5400"
    },
    Wl_GwIp: {
        obj: "6800",
        lri: "108A5500"
    },
    Wl_DnsSrvIp: {
        obj: "6800",
        lri: "108A5600"
    },
    Wl_DoWPS: {
        obj: "6800",
        lri: "088A5100"
    },
    Wl_ExsNetw: {
        obj: "6800",
        lri: "108AA400"
    },
    Wl_ActlIp: {
        obj: "6180",
        lri: "104AB700"
    },
    Wl_ConnStt: {
        obj: "6180",
        lri: "084ABC00"
    },
    Wl_SigPwr: {
        obj: "6100",
        lri: "004AB600"
    },
    Wl_SoftAcsIsOn: {
        obj: "6800",
        lri: "088A4D00"
    },
    Wl_SoftAcsConnStt: {
        obj: "6180",
        lri: "084A6400"
    },
    Acs_PwdUsr: {
        obj: "6800",
        lri: "10841E00"
    },
    Acs_PwdIstl: {
        obj: "6802",
        lri: "10841F00"
    },
    Acs_PwdSvc: {
        obj: "6804",
        lri: "10842000"
    },
    Acs_PwdDvlp: {
        obj: "6806",
        lri: "10842100"
    },
    CntrySettings_Lang: {
        obj: "6800",
        lri: "08837800"
    },
    CntrySettings: {
        obj: "6800",
        lri: "08871E00"
    },
    GridGuard_CntrySet: {
        obj: "6802",
        lri: "08871F00"
    },
    Time_Zone: {
        obj: "6800",
        lri: "08838D00"
    },
    Time_AutoManual: {
        obj: "6800",
        lri: "08836E00"
    },
    Time_DstAutoManual: {
        obj: "6800",
        lri: "08838B00"
    },
    Time_DstOnOff: {
        obj: "6800",
        lri: "08838C00"
    },
    Plnt_DcWRtg: {
        obj: "6800",
        lri: "00852A00"
    },
    Plnt_VARtg: {
        obj: "6800",
        lri: "00931E00"
    },
    Inverter_WModCfg_GriSwOpnZerW: {
        obj: "6802",
        lri: "08924000"
    },
    Inverter_WModCfg_WMod: {
        obj: "6802",
        lri: "08924100"
    },
    Inverter_WModCfg_WCnstCfg_W: {
        obj: "6802",
        lri: "00924200"
    },
    Inverter_WModCfg_WCnstCfg_WNom: {
        obj: "6802",
        lri: "00924300"
    },
    Inverter_CtlComCfg_WCtlCom_CtlComMssMod: {
        obj: "6802",
        lri: "0892E600"
    },
    Inverter_CtlComCfg_WCtlCom_FlbWNom: {
        obj: "6802",
        lri: "0092E800"
    },
    Inverter_CtlComCfg_WCtlCom_TmsOut: {
        obj: "6802",
        lri: "0092E700"
    },
    PCC_WMaxMod: {
        obj: "6800",
        lri: "0892D600"
    },
    PCC_WMax: {
        obj: "6800",
        lri: "0092D700"
    },
    PCC_WMaxNom: {
        obj: "6800",
        lri: "0092D800"
    },
    PCC_FlbInv_WMax: {
        obj: "6800",
        lri: "00922500"
    },
    PCC_FlbInv_WMaxNom: {
        obj: "6800",
        lri: "00922600"
    },
    PCC_WMaxAsymMod: {
        obj: "6800",
        lri: "08923300"
    },
    PCC_WMaxAsym: {
        obj: "6800",
        lri: "00923400"
    },
    Inverter_OutPhs: {
        obj: "6802",
        lri: "08861E00"
    },
    Inverter_VArModCfg_VArMod: {
        obj: "6802",
        lri: "08922900"
    },
    Inverter_VArModCfg_VArCnstCfg_VArNom: {
        obj: "6802",
        lri: "40922B00"
    },
    Inverter_CtlComCfg_VArCtlCom_CtlComMssMod: {
        obj: "6802",
        lri: "0892E900"
    },
    Inverter_CtlComCfg_VArCtlCom_FlbVArNom: {
        obj: "6802",
        lri: "4092EB00"
    },
    Inverter_CtlComCfg_VArCtlCom_TmsOut: {
        obj: "6802",
        lri: "0092EA00"
    },
    Inverter_VArModCfg_PFCnstCfg_PF: {
        obj: "6802",
        lri: "40923100"
    },
    Inverter_VArModCfg_PFCnstCfg_PFExt: {
        obj: "6802",
        lri: "08923200"
    },
    Inverter_CtlComCfg_PFCtlCom_CtlComMssMod: {
        obj: "6802",
        lri: "0892EC00"
    },
    Inverter_CtlComCfg_PFCtlCom_FlbPF: {
        obj: "6802",
        lri: "4092EE00"
    },
    Inverter_CtlComCfg_PFCtlCom_FlbPFExt: {
        obj: "6802",
        lri: "0892EF00"
    },
    Inverter_CtlComCfg_PFCtlCom_TmsOut: {
        obj: "6802",
        lri: "0092ED00"
    },
    Metering_GridMs_S0kWhIn: {
        obj: "6802",
        lri: "00863700"
    },
    Metering_GridMs_TotkWhInSet: {
        obj: "6800",
        lri: "00A63800"
    },
    Metering_GridMs_S0kWhOut: {
        obj: "6802",
        lri: "00863600"
    },
    Metering_GridMs_TotkWhOutSet: {
        obj: "6800",
        lri: "00A63700"
    },
    Metering_PvMs_S0kWhOut: {
        obj: "6802",
        lri: "00863500"
    },
    Metering_PvMs_TotkWhOutSet: {
        obj: "6800",
        lri: "00A63C00"
    },
    Metering_TotOpTms: {
        obj: "6400",
        lri: "00462E00"
    },
    Metering_TotWhOut: {
        obj: "6400",
        lri: "00260100"
    },
    Metering_TotWh: {
        obj: "6400",
        lri: "00432200"
    },
    Metering_GridMs_TotWhOut: {
        obj: "6400",
        lri: "00462400"
    },
    Metering_GridMs_TotWhIn: {
        obj: "6400",
        lri: "00462500"
    },
    Metering_GnMs_TotWOut: {
        obj: "6100",
        lri: "40462C00"
    },
    ExtGridMs_TotW: {
        obj: "6100",
        lri: "4046F200"
    },
    GnOpStt: {
        obj: "6180",
        lri: "08486A00"
    },
    Metering_GridMs_TotWIn: {
        obj: "6100",
        lri: "40463700"
    },
    Metering_GridMs_TotWOut: {
        obj: "6100",
        lri: "40463600"
    },
    Metering_TotkWhSet: {
        obj: "6800",
        lri: "0083F200"
    },
    Metering_S0kWh: {
        obj: "6802",
        lri: "0083F100"
    },
    Battery_ChaStt: {
        obj: "6100",
        lri: "00295A00"
    },
    Battery_OpStt: {
        obj: "6180",
        lri: "08495E00"
    },
    Battery_CurrentCharging: {
        obj: "6100",
        lri: "00496900"
    },
    Battery_CurrentDischarging: {
        obj: "6100",
        lri: "00496A00"
    },
    Battery_Vol: {
        obj: "6100",
        lri: "00495C00"
    },
    Battery_Amp: {
        obj: "6100",
        lri: "40495D00"
    },
    Battery_TmpVal: {
        obj: "6100",
        lri: "40495B00"
    },
    BatChrg_BatChrg: {
        obj: "6400",
        lri: "00496700"
    },
    BatDsch_BatDsch: {
        obj: "6400",
        lri: "00496800"
    },
    Bat_IstlMod: {
        obj: "6802",
        lri: "08893600"
    },
    Bat_SvcMod: {
        obj: "6804",
        lri: "08893D00"
    },
    Bat_Diag_ActlCapacNom: {
        obj: "6100",
        lri: "00696E00"
    },
    Bat_CapacRtgWhArr: {
        obj: "6800",
        lri: "00894800"
    },
    Nameplate_CmpBMS_SerNumTxt: {
        obj: "6802",
        lri: "10B18B00"
    },
    Operation_Bat_TmpHealth: {
        obj: "6180",
        lri: "08414E00"
    },
    Operation_RstBatCfg: {
        obj: "6802",
        lri: "08893300"
    },
    Nameplate_Location: {
        obj: "6800",
        lri: "10821E00"
    },
    Nameplate_CmpMdul_Typ: {
        obj: "6802",
        lri: "08917D00"
    },
    Nameplate_CmpMdul2_Typ: {
        obj: "6802",
        lri: "08918500"
    },
    Nameplate_CmpBMS_Typ: {
        obj: "6802",
        lri: "08918D00"
    },
    Operation_CmpBMS_Typ: {
        obj: "6802",
        lri: "08896800"
    },
    Nsd_ExsDev: {
        obj: "6802",
        lri: "108A2300"
    },
    InOut_AnIn_Func: {
        obj: "6800",
        lri: "0883D800"
    },
    InOut_AnIn_SigVal1NoUnt: {
        obj: "6800",
        lri: "00839100"
    },
    InOut_AnIn_SigVal2NoUnt: {
        obj: "6800",
        lri: "00839300"
    },
    InOut_AnIn_YVal1NoUnt: {
        obj: "6800",
        lri: "40839200"
    },
    InOut_AnIn_YVal2NoUnt: {
        obj: "6800",
        lri: "40839400"
    },
    InOut_S0ItfIn_Func: {
        obj: "6800",
        lri: "0883D900"
    },
    InOut_Env_TmpVal_Func: {
        obj: "6800",
        lri: "088F2000"
    },
    InOut_Mdul_TmpVal_Func: {
        obj: "6800",
        lri: "088F2100"
    },
    Env_ExInsol: {
        obj: "6100",
        lri: "004F4E00"
    },
    Env_TmpVal: {
        obj: "6100",
        lri: "402F1E00"
    },
    Env_S0WndSpd: {
        obj: "6800",
        lri: "008F3500"
    },
    Env_HorWSpd: {
        obj: "6100",
        lri: "002F7A00"
    },
    Mdul_TmpVal: {
        obj: "6100",
        lri: "402F2000"
    },
    Bat_Typ: {
        obj: "6800",
        lri: "08893B00"
    },
    Bat_BatVTyp: {
        obj: "6802",
        lri: "08892900"
    },
    Bat_VRtg: {
        obj: "6800",
        lri: "00893C00"
    },
    Bat_CapacRtg: {
        obj: "6800",
        lri: "00893900"
    },
    Inverter_AcVHzTyp: {
        obj: "6802",
        lri: "08838900"
    },
    Inverter_Clt_Typ: {
        obj: "6802",
        lri: "0883FB00"
    },
    Inverter_Clt_Sys: {
        obj: "6802",
        lri: "0883FC00"
    },
    Inverter_Clt_CltMod: {
        obj: "6802",
        lri: "0883FD00"
    },
    Inverter_Clt_Addr: {
        obj: "6802",
        lri: "0083FE00"
    },
    Inverter_SysFncSel: {
        obj: "6802",
        lri: "08838A00"
    },
    GridGuard_EzaTyp: {
        obj: "6802",
        lri: "08921900"
    },
    Operation_Cfg_QCG: {
        obj: "6802",
        lri: "08834700"
    },
    Operation_QCGStt: {
        obj: "6182",
        lri: "08412200"
    },
    Inverter_GriOffOpMod: {
        obj: "6802",
        lri: "08833F00"
    },
    Sys_AcTyp: {
        obj: "6800",
        lri: "08866A00"
    },
    Operation_GriCreaSrc: {
        obj: "6800",
        lri: "08862500"
    },
    DigIn_OpMod: {
        obj: "6182",
        lri: "08434C00"
    },
    Gn_ARtg: {
        obj: "6800",
        lri: "00882000"
    },
    PubGri_ExtGriAMax: {
        obj: "6802",
        lri: "00862B00"
    },
    MltFncSw_OpMode: {
        obj: "6800",
        lri: "0883AA00"
    },
    Inverter_Clt_SerNumDev1: {
        obj: "6802",
        lri: "00A33700"
    },
    Inverter_Clt_SerNumDev2: {
        obj: "6802",
        lri: "00A33800"
    },
    Inverter_Clt_PhsDev1: {
        obj: "6802",
        lri: "08A61E00"
    },
    Inverter_Clt_PhsDev2: {
        obj: "6802",
        lri: "08A61F00"
    },
    Operation_StrFltDet_OpMod: {
        obj: "6802",
        lri: "08857400"
    },
    Operation_StrFltDet_SnsLvl: {
        obj: "6802",
        lri: "08857200"
    },
    Operation_StrFltDet_Tol: {
        obj: "6802",
        lri: "00857500"
    },
    Operation_StrFltDet_WrnTm: {
        obj: "6802",
        lri: "00857600"
    },
    Operation_StrFltDet_ChStrgNum: {
        obj: "6802",
        lri: "00857100"
    },
    Operation_StrFltDet_ChGrp: {
        obj: "6802",
        lri: "08857000"
    },
    PwrCtlMdul_OpMode: {
        obj: "6800",
        lri: "0892AE00"
    },
    PwrCtlMdul_DigInGrp_Cfg: {
        obj: "6802",
        lri: "0883EE00"
    },
    PwrCtlMdul_DigInStt: {
        obj: "6180",
        lri: "08521E00"
    },
    PwrCtlMdul_FltClrTms: {
        obj: "6802",
        lri: "0083ED00"
    },
    PwrCtlMdul_FlbTmh: {
        obj: "6802",
        lri: "0083EB00"
    },
    PwrCtlMdul_FlbVal: {
        obj: "6802",
        lri: "4083EC00"
    },
    PwrCtlMdul_WMaxGrp: {
        obj: "6802",
        lri: "00857100"
    },
    PwrCtlMdul_WCnstCls_DigInD00: {
        obj: "6802",
        lri: "4083DB00"
    },
    PwrCtlMdul_WCnstCls_DigInD01: {
        obj: "6802",
        lri: "4083DC00"
    },
    PwrCtlMdul_WCnstCls_DigInD02: {
        obj: "6802",
        lri: "4083DD00"
    },
    PwrCtlMdul_WCnstCls_DigInD03: {
        obj: "6802",
        lri: "4083DE00"
    },
    PwrCtlMdul_WCnstCls_DigInD04: {
        obj: "6802",
        lri: "4083DF00"
    },
    PwrCtlMdul_WCnstCls_DigInD05: {
        obj: "6802",
        lri: "4083E000"
    },
    PwrCtlMdul_WCnstCls_DigInD06: {
        obj: "6802",
        lri: "4083E100"
    },
    PwrCtlMdul_WCnstCls_DigInD07: {
        obj: "6802",
        lri: "4083E200"
    },
    PwrCtlMdul_WCnstCls_DigInD08: {
        obj: "6802",
        lri: "4083E300"
    },
    PwrCtlMdul_WCnstCls_DigInD09: {
        obj: "6802",
        lri: "4083E400"
    },
    PwrCtlMdul_WCnstCls_DigInD10: {
        obj: "6802",
        lri: "4083E500"
    },
    PwrCtlMdul_WCnstCls_DigInD11: {
        obj: "6802",
        lri: "4083E600"
    },
    PwrCtlMdul_WCnstCls_DigInD12: {
        obj: "6802",
        lri: "4083E700"
    },
    PwrCtlMdul_WCnstCls_DigInD13: {
        obj: "6802",
        lri: "4083E800"
    },
    PwrCtlMdul_WCnstCls_DigInD14: {
        obj: "6802",
        lri: "4083E900"
    },
    PwrCtlMdul_WCnstCls_DigInD15: {
        obj: "6802",
        lri: "4083EA00"
    },
    Bck_BckBoxOpMod: {
        obj: "6802",
        lri: "08864200"
    },
    Bck_ComHealth: {
        obj: "6180",
        lri: "08511E00"
    },
    Bck_RdtSw: {
        obj: "6802",
        lri: "08864300"
    },
    Bck_PhsCpl: {
        obj: "6802",
        lri: "08864400"
    },
    Bck_NGnd: {
        obj: "6802",
        lri: "08864500"
    },
    Bck_DmMin: {
        obj: "6802",
        lri: "00895100"
    },
    Metering_Mb_EnMtrTyp: {
        obj: "6180",
        lri: "084A2C00"
    },
    Metering_Mb_EnMtrSerNumTxt: {
        obj: "6800",
        lri: "108A2B00"
    },
    Metering_Mb_Health: {
        obj: "6180",
        lri: "084A2E00"
    },
    Metering_EnMtrTyp: {
        obj: "6800",
        lri: "088A2900"
    },
    Metering_EnMtrARtg: {
        obj: "6800",
        lri: "008A2A00"
    },
    Operation_Health_Master: {
        obj: "6180",
        lri: "08414F00"
    },
    Operation_Health_Slv1: {
        obj: "6182",
        lri: "08415000"
    },
    Operation_Health_Slv2: {
        obj: "6182",
        lri: "08415100"
    },
    MltClt_TotWIn: {
        obj: "6102",
        lri: "40465C00"
    },
    MltClt_TotWOut: {
        obj: "6102",
        lri: "40465D00"
    },
    MltClt_TotLodW: {
        obj: "6102",
        lri: "00465E00"
    },
    DcMs_PanLevMdul_Vol: {
        obj: "6100",
        lri: "40652800"
    },
    DcMs_PanLevMdul_Amp: {
        obj: "6100",
        lri: "40652900"
    },
    DcMs_PanLevMdul_W: {
        obj: "6100",
        lri: "40652A00"
    },
    DcMs_PanLevMdul_Tmp: {
        obj: "6100",
        lri: "40652B00"
    },
    DcMs_PanLevMdul_SigPwr: {
        obj: "6100",
        lri: "00652C00"
    },
    Operation_PanLevMdul_Health: {
        obj: "6180",
        lri: "08652400"
    },
    Operation_PanLevCtl_Health: {
        obj: "6180",
        lri: "08652500"
    },
    Operation_PanLevCom_Health: {
        obj: "6180",
        lri: "08652600"
    },
    Operation_RSSOpMode: {
        obj: "6800",
        lri: "08852C00"
    },
    Operation_SIS_IsOn: {
        obj: "6800",
        lri: "088A3300"
    },
    DcCfg_PanLevCtl_SerNum: {
        obj: "6800",
        lri: "10852100"
    },
    DcCfg_PanLevCtlPlnt_Id: {
        obj: "6800",
        lri: "40852200"
    },
    DcCfg_PanLevCtl_SwRev: {
        obj: "6800",
        lri: "00852300"
    },
    DcCfg_PanLevCtl_RSSFnc: {
        obj: "6800",
        lri: "08831900"
    },
    DcMs_PanLevCtl_CfgStt: {
        obj: "6180",
        lri: "08653A00"
    },
    DcMs_PanLevCtl_OptFnd: {
        obj: "6100",
        lri: "00653100"
    },
    DcMs_PanLevCtl_GwFnd: {
        obj: "6100",
        lri: "00653200"
    },
    DcCfg_PanLevCom_SerNum: {
        obj: "6800",
        lri: "10852400"
    },
    DcCfg_PanLevCom_SwRev: {
        obj: "6800",
        lri: "10853200"
    },
    DcCfg_PanLevCom_Model: {
        obj: "6800",
        lri: "08853100"
    },
    DcCfg_PanLevCom_GwCnt: {
        obj: "6800",
        lri: "00853400"
    },
    DcCfg_PanLevMdul_Lbl: {
        obj: "6800",
        lri: "10852500"
    },
    DcCfg_PanLevMdul_SerNum: {
        obj: "6800",
        lri: "10852600"
    },
    DcCfg_PanLevMdul_Model: {
        obj: "6800",
        lri: "08852800"
    },
    DcCfg_PanLevMdul_SwRev: {
        obj: "6800",
        lri: "10853300"
    },
    DcCfg_PanLevStrg_MPPTrk: {
        obj: "6800",
        lri: "08852700"
    },
    DcCfg_PanLevStrg_OptCnt: {
        obj: "6800",
        lri: "00852F00"
    },
    DcCfg_PanLevStrg_MdulCnt: {
        obj: "6800",
        lri: "00852E00"
    },
    DcCfg_PanLevStrg_Lbl: {
        obj: "6800",
        lri: "10852900"
    },
    Operation_CelMdm_SigPwr: {
        obj: "6102",
        lri: "004B2100"
    },
    Operation_CelMdm_Health: {
        obj: "6180",
        lri: "084B2000"
    },
    CelMdm_ConnStt: {
        obj: "6182",
        lri: "084B2400"
    },
    Operation_CelMdm_MNP: {
        obj: "6180",
        lri: "104B2200"
    },
    CelMdm_IsOn: {
        obj: "6802",
        lri: "088B2800"
    },
    CelMdm_Do: {
        obj: "6802",
        lri: "088B2900"
    },
    CelMdmIMEI: {
        obj: "6802",
        lri: "10AB2300"
    },
    CelMdm_SimCard_ICCID: {
        obj: "6802",
        lri: "10AB2400"
    },
    CmpMdul_RS485Mod: {
        obj: "6802",
        lri: "088A2F00"
    },
    CmpMdul2_RS485Mod: {
        obj: "6802",
        lri: "088A3000"
    },
    CmpRS485_RS485Mod: {
        obj: "6802",
        lri: "088A2E00"
    },
    CmpRS485_Term: {
        obj: "6802",
        lri: "088A3100"
    },
    PCC_PPO_FuncEna: {
        obj: "6802",
        lri: "08952100"
    },
    PCC_PPO_Nam: {
        obj: "6800",
        lri: "10952800"
    },
    PCC_PPO_OpMod: {
        obj: "6800",
        lri: "08952700"
    },
    PCC_PPO_ChrgW: {
        obj: "6800",
        lri: "40952200"
    },
    PCC_PPO_DschW: {
        obj: "6800",
        lri: "40952300"
    },
    PCC_PPO_StrTm: {
        obj: "6800",
        lri: "00952400"
    },
    PCC_PPO_StopTm: {
        obj: "6800",
        lri: "00952500"
    },
    PCC_PPO_DtSel: {
        obj: "6800",
        lri: "00952600"
    }
};
SMAObjects.OBJECTS = {
    '6180_08214800': 'Operation_Health',
    '6180_08414900': 'Operation_Evt_Msg',
    '6100_00418000': 'Operation_Evt_EvtNo',
    '6180_08412900': 'Status_Update',
    '6180_08522F00': 'Nsm_Status',
    '6800_10821E00': 'Name_Location',
    '6800_00A21E00': 'Name_SerialNum',
    '6800_08822000': 'Name_Model',
    '6800_00823400': 'Name_PkgRev',
    '6800_00823500': 'Name_PkgUpRev',
    '6800_08839500': 'Auto_UpdateOn',
    '6800_00832A00': 'Inverter_WLim',
    '6100_40263F00': 'GridMs_TotW_Cur',
    '6100_40665F00': 'GridMs_TotVAr_Cur',
    '6180_00522900': 'Operation_Dmd_PFCtl',
    '6180_08522A00': 'Operation_Dmd_PFExtCtl',
    '6800_008AA300': 'Energy_Meter',
    '6800_008AA200': 'Energy_Meter_Add',
    '6180_084AAA00': 'EnergyMeter_Status',
    '6802_08833A00': 'Self_Test',
    '6802_08833900': 'Self_Test_Dmd',
    '6802_00832B00': 'Inverter_WMax',
    '6802_00924200': 'Inverter_W',
    '6802_00924300': 'Inverter_WNom',
    '6802_08872000': 'GridGuard_Cntry_LoginMdt',
    '6800_08811F00': 'Sys_InitOk',
    '6180_104A9A00': 'Spdwr_ActlIp',
    '6180_084A9600': 'Spdwr_ComSocAStt',
    '6180_084A9800': 'Spdwr_ComSocBStt',
    '6800_088A8A00': 'Spdwr_AutoCfgIsOn',
    '6800_10AA6100': 'Spdwr_Ip',
    '6800_10AA6200': 'Spdwr_SnetMsk',
    '6800_10AA6300': 'Spdwr_GwIp',
    '6800_10AA6400': 'Spdwr_DnsSrvIp',
    '6800_088B1E00': 'Eth_Proxy_IsOn',
    '6800_108B2100': 'Eth_Proxy_Login',
    '6800_008B1F00': 'Eth_Proxy_Port',
    '6800_108B2200': 'Eth_Proxy_Pwd',
    '6800_108B2000': 'Eth_Proxy_Srv',
    '6800_108A4E00': 'Wl_Ssid',
    '6800_108A5900': 'Wl_Ssid_Sec',
    '6800_088A4C00': 'Wl_IsOn',
    '6800_108A4F00': 'Wl_Psk',
    '6800_108A5A00': 'Wl_Psk_Sec',
    '6800_088A5000': 'Wl_Encryption',
    '6800_088A5B00': 'Wl_Encryption_Sec',
    '6800_088A5200': 'Wl_AutoCfgIsOn',
    '6800_088AA500': 'Wl_Scan',
    '6180_084ABB00': 'Wl_ScanStt',
    '6800_108A5300': 'Wl_Ip',
    '6800_108A5400': 'Wl_SnetMsk',
    '6800_108A5500': 'Wl_GwIp',
    '6800_108A5600': 'Wl_DnsSrvIp',
    '6800_088A5100': 'Wl_DoWPS',
    '6800_108AA400': 'Wl_ExsNetw',
    '6180_104AB700': 'Wl_ActlIp',
    '6180_084ABC00': 'Wl_ConnStt',
    '6100_004AB600': 'Wl_SigPwr',
    '6800_088A4D00': 'Wl_SoftAcsIsOn',
    '6180_084A6400': 'Wl_SoftAcsConnStt',
    '6800_10841E00': 'Acs_PwdUsr',
    '6802_10841F00': 'Acs_PwdIstl',
    '6804_10842000': 'Acs_PwdSvc',
    '6806_10842100': 'Acs_PwdDvlp',
    '6800_08837800': 'CntrySettings_Lang',
    '6800_08871E00': 'CntrySettings',
    '6802_08871F00': 'GridGuard_CntrySet',
    '6800_08838D00': 'Time_Zone',
    '6800_08836E00': 'Time_AutoManual',
    '6800_08838B00': 'Time_DstAutoManual',
    '6800_08838C00': 'Time_DstOnOff',
    '6800_00852A00': 'Plnt_DcWRtg',
    '6800_00931E00': 'Plnt_VARtg',
    '6802_08924000': 'Inverter_WModCfg_GriSwOpnZerW',
    '6802_08924100': 'Inverter_WModCfg_WMod',
    '6802_0892E600': 'Inverter_CtlComCfg_WCtlCom_CtlComMssMod',
    '6802_0092E800': 'Inverter_CtlComCfg_WCtlCom_FlbWNom',
    '6802_0092E700': 'Inverter_CtlComCfg_WCtlCom_TmsOut',
    '6800_0892D600': 'PCC_WMaxMod',
    '6800_0092D700': 'PCC_WMax',
    '6800_0092D800': 'PCC_WMaxNom',
    '6800_00922500': 'PCC_FlbInv_WMax',
    '6800_00922600': 'PCC_FlbInv_WMaxNom',
    '6800_08923300': 'PCC_WMaxAsymMod',
    '6800_00923400': 'PCC_WMaxAsym',
    '6802_08861E00': 'Inverter_OutPhs',
    '6802_08922900': 'Inverter_VArModCfg_VArMod',
    '6802_40922B00': 'Inverter_VArModCfg_VArCnstCfg_VArNom',
    '6802_0892E900': 'Inverter_CtlComCfg_VArCtlCom_CtlComMssMod',
    '6802_4092EB00': 'Inverter_CtlComCfg_VArCtlCom_FlbVArNom',
    '6802_0092EA00': 'Inverter_CtlComCfg_VArCtlCom_TmsOut',
    '6802_40923100': 'Inverter_VArModCfg_PFCnstCfg_PF',
    '6802_08923200': 'Inverter_VArModCfg_PFCnstCfg_PFExt',
    '6802_0892EC00': 'Inverter_CtlComCfg_PFCtlCom_CtlComMssMod',
    '6802_4092EE00': 'Inverter_CtlComCfg_PFCtlCom_FlbPF',
    '6802_0892EF00': 'Inverter_CtlComCfg_PFCtlCom_FlbPFExt',
    '6802_0092ED00': 'Inverter_CtlComCfg_PFCtlCom_TmsOut',
    '6802_00863700': 'Metering_GridMs_S0kWhIn',
    '6800_00A63800': 'Metering_GridMs_TotkWhInSet',
    '6802_00863600': 'Metering_GridMs_S0kWhOut',
    '6800_00A63700': 'Metering_GridMs_TotkWhOutSet',
    '6802_00863500': 'Metering_PvMs_S0kWhOut',
    '6800_00A63C00': 'Metering_PvMs_TotkWhOutSet',
    '6400_00462E00': 'Metering_TotOpTms',
    '6400_00260100': 'Metering_TotWhOut',
    '6400_00432200': 'Metering_TotWh',
    '6400_00462400': 'Metering_GridMs_TotWhOut',
    '6400_00462500': 'Metering_GridMs_TotWhIn',
    '6100_40462C00': 'Metering_GnMs_TotWOut',
    '6100_4046F200': 'ExtGridMs_TotW',
    '6180_08486A00': 'GnOpStt',
    '6100_40463700': 'Metering_GridMs_TotWIn',
    '6100_40463600': 'Metering_GridMs_TotWOut',
    '6800_0083F200': 'Metering_TotkWhSet',
    '6802_0083F100': 'Metering_S0kWh',
    '6100_00295A00': 'Battery_ChaStt',
    '6180_08495E00': 'Battery_OpStt',
    '6100_00496900': 'Battery_CurrentCharging',
    '6100_00496A00': 'Battery_CurrentDischarging',
    '6100_00495C00': 'Battery_Vol',
    '6100_40495D00': 'Battery_Amp',
    '6100_40495B00': 'Battery_TmpVal',
    '6400_00496700': 'BatChrg_BatChrg',
    '6400_00496800': 'BatDsch_BatDsch',
    '6802_08893600': 'Bat_IstlMod',
    '6804_08893D00': 'Bat_SvcMod',
    '6100_00696E00': 'Bat_Diag_ActlCapacNom',
    '6800_00894800': 'Bat_CapacRtgWhArr',
    '6802_10B18B00': 'Nameplate_CmpBMS_SerNumTxt',
    '6180_08414E00': 'Operation_Bat_TmpHealth',
    '6802_08893300': 'Operation_RstBatCfg',
    '6800_10821E01': 'Nameplate_Location',
    '6802_08917D00': 'Nameplate_CmpMdul_Typ',
    '6802_08918500': 'Nameplate_CmpMdul2_Typ',
    '6802_08918D00': 'Nameplate_CmpBMS_Typ',
    '6802_08896800': 'Operation_CmpBMS_Typ',
    '6802_108A2300': 'Nsd_ExsDev',
    '6800_0883D800': 'InOut_AnIn_Func',
    '6800_00839100': 'InOut_AnIn_SigVal1NoUnt',
    '6800_00839300': 'InOut_AnIn_SigVal2NoUnt',
    '6800_40839200': 'InOut_AnIn_YVal1NoUnt',
    '6800_40839400': 'InOut_AnIn_YVal2NoUnt',
    '6800_0883D900': 'InOut_S0ItfIn_Func',
    '6800_088F2000': 'InOut_Env_TmpVal_Func',
    '6800_088F2100': 'InOut_Mdul_TmpVal_Func',
    '6100_004F4E00': 'Env_ExInsol',
    '6100_402F1E00': 'Env_TmpVal',
    '6800_008F3500': 'Env_S0WndSpd',
    '6100_002F7A00': 'Env_HorWSpd',
    '6100_402F2000': 'Mdul_TmpVal',
    '6800_08893B00': 'Bat_Typ',
    '6802_08892900': 'Bat_BatVTyp',
    '6800_00893C00': 'Bat_VRtg',
    '6800_00893900': 'Bat_CapacRtg',
    '6802_08838900': 'Inverter_AcVHzTyp',
    '6802_0883FB00': 'Inverter_Clt_Typ',
    '6802_0883FC00': 'Inverter_Clt_Sys',
    '6802_0883FD00': 'Inverter_Clt_CltMod',
    '6802_0083FE00': 'Inverter_Clt_Addr',
    '6802_08838A00': 'Inverter_SysFncSel',
    '6802_08921900': 'GridGuard_EzaTyp',
    '6802_08834700': 'Operation_Cfg_QCG',
    '6182_08412200': 'Operation_QCGStt',
    '6802_08833F00': 'Inverter_GriOffOpMod',
    '6800_08866A00': 'Sys_AcTyp',
    '6800_08862500': 'Operation_GriCreaSrc',
    '6182_08434C00': 'DigIn_OpMod',
    '6800_00882000': 'Gn_ARtg',
    '6802_00862B00': 'PubGri_ExtGriAMax',
    '6800_0883AA00': 'MltFncSw_OpMode',
    '6802_00A33700': 'Inverter_Clt_SerNumDev1',
    '6802_00A33800': 'Inverter_Clt_SerNumDev2',
    '6802_08A61E00': 'Inverter_Clt_PhsDev1',
    '6802_08A61F00': 'Inverter_Clt_PhsDev2',
    '6802_08857400': 'Operation_StrFltDet_OpMod',
    '6802_08857200': 'Operation_StrFltDet_SnsLvl',
    '6802_00857500': 'Operation_StrFltDet_Tol',
    '6802_00857600': 'Operation_StrFltDet_WrnTm',
    '6802_00857100': 'Operation_StrFltDet_ChStrgNum',
    '6802_08857000': 'Operation_StrFltDet_ChGrp',
    '6800_0892AE00': 'PwrCtlMdul_OpMode',
    '6802_0883EE00': 'PwrCtlMdul_DigInGrp_Cfg',
    '6180_08521E00': 'PwrCtlMdul_DigInStt',
    '6802_0083ED00': 'PwrCtlMdul_FltClrTms',
    '6802_0083EB00': 'PwrCtlMdul_FlbTmh',
    '6802_4083EC00': 'PwrCtlMdul_FlbVal',
    '6802_4083DB00': 'PwrCtlMdul_WCnstCls_DigInD00',
    '6802_4083DC00': 'PwrCtlMdul_WCnstCls_DigInD01',
    '6802_4083DD00': 'PwrCtlMdul_WCnstCls_DigInD02',
    '6802_4083DE00': 'PwrCtlMdul_WCnstCls_DigInD03',
    '6802_4083DF00': 'PwrCtlMdul_WCnstCls_DigInD04',
    '6802_4083E000': 'PwrCtlMdul_WCnstCls_DigInD05',
    '6802_4083E100': 'PwrCtlMdul_WCnstCls_DigInD06',
    '6802_4083E200': 'PwrCtlMdul_WCnstCls_DigInD07',
    '6802_4083E300': 'PwrCtlMdul_WCnstCls_DigInD08',
    '6802_4083E400': 'PwrCtlMdul_WCnstCls_DigInD09',
    '6802_4083E500': 'PwrCtlMdul_WCnstCls_DigInD10',
    '6802_4083E600': 'PwrCtlMdul_WCnstCls_DigInD11',
    '6802_4083E700': 'PwrCtlMdul_WCnstCls_DigInD12',
    '6802_4083E800': 'PwrCtlMdul_WCnstCls_DigInD13',
    '6802_4083E900': 'PwrCtlMdul_WCnstCls_DigInD14',
    '6802_4083EA00': 'PwrCtlMdul_WCnstCls_DigInD15',
    '6802_08864200': 'Bck_BckBoxOpMod',
    '6180_08511E00': 'Bck_ComHealth',
    '6802_08864300': 'Bck_RdtSw',
    '6802_08864400': 'Bck_PhsCpl',
    '6802_08864500': 'Bck_NGnd',
    '6802_00895100': 'Bck_DmMin',
    '6180_084A2C00': 'Metering_Mb_EnMtrTyp',
    '6800_108A2B00': 'Metering_Mb_EnMtrSerNumTxt',
    '6180_084A2E00': 'Metering_Mb_Health',
    '6800_088A2900': 'Metering_EnMtrTyp',
    '6800_008A2A00': 'Metering_EnMtrARtg',
    '6180_08414F00': 'Operation_Health_Master',
    '6182_08415000': 'Operation_Health_Slv1',
    '6182_08415100': 'Operation_Health_Slv2',
    '6102_40465C00': 'MltClt_TotWIn',
    '6102_40465D00': 'MltClt_TotWOut',
    '6102_00465E00': 'MltClt_TotLodW',
    '6100_40652800': 'DcMs_PanLevMdul_Vol',
    '6100_40652900': 'DcMs_PanLevMdul_Amp',
    '6100_40652A00': 'DcMs_PanLevMdul_W',
    '6100_40652B00': 'DcMs_PanLevMdul_Tmp',
    '6100_00652C00': 'DcMs_PanLevMdul_SigPwr',
    '6180_08652400': 'Operation_PanLevMdul_Health',
    '6180_08652500': 'Operation_PanLevCtl_Health',
    '6180_08652600': 'Operation_PanLevCom_Health',
    '6800_08852C00': 'Operation_RSSOpMode',
    '6800_088A3300': 'Operation_SIS_IsOn',
    '6800_10852100': 'DcCfg_PanLevCtl_SerNum',
    '6800_40852200': 'DcCfg_PanLevCtlPlnt_Id',
    '6800_00852300': 'DcCfg_PanLevCtl_SwRev',
    '6800_08831900': 'DcCfg_PanLevCtl_RSSFnc',
    '6180_08653A00': 'DcMs_PanLevCtl_CfgStt',
    '6100_00653100': 'DcMs_PanLevCtl_OptFnd',
    '6100_00653200': 'DcMs_PanLevCtl_GwFnd',
    '6800_10852400': 'DcCfg_PanLevCom_SerNum',
    '6800_10853200': 'DcCfg_PanLevCom_SwRev',
    '6800_08853100': 'DcCfg_PanLevCom_Model',
    '6800_00853400': 'DcCfg_PanLevCom_GwCnt',
    '6800_10852500': 'DcCfg_PanLevMdul_Lbl',
    '6800_10852600': 'DcCfg_PanLevMdul_SerNum',
    '6800_08852800': 'DcCfg_PanLevMdul_Model',
    '6800_10853300': 'DcCfg_PanLevMdul_SwRev',
    '6800_08852700': 'DcCfg_PanLevStrg_MPPTrk',
    '6800_00852F00': 'DcCfg_PanLevStrg_OptCnt',
    '6800_00852E00': 'DcCfg_PanLevStrg_MdulCnt',
    '6800_10852900': 'DcCfg_PanLevStrg_Lbl',
    '6102_004B2100': 'Operation_CelMdm_SigPwr',
    '6180_084B2000': 'Operation_CelMdm_Health',
    '6182_084B2400': 'CelMdm_ConnStt',
    '6180_104B2200': 'Operation_CelMdm_MNP',
    '6802_088B2800': 'CelMdm_IsOn',
    '6802_088B2900': 'CelMdm_Do',
    '6802_10AB2300': 'CelMdmIMEI',
    '6802_10AB2400': 'CelMdm_SimCard_ICCID',
    '6802_088A2F00': 'CmpMdul_RS485Mod',
    '6802_088A3000': 'CmpMdul2_RS485Mod',
    '6802_088A2E00': 'CmpRS485_RS485Mod',
    '6802_088A3100': 'CmpRS485_Term',
    '6802_08952100': 'PCC_PPO_FuncEna',
    '6800_10952800': 'PCC_PPO_Nam',
    '6800_08952700': 'PCC_PPO_OpMod',
    '6800_40952200': 'PCC_PPO_ChrgW',
    '6800_40952300': 'PCC_PPO_DschW',
    '6800_00952400': 'PCC_PPO_StrTm',
    '6800_00952500': 'PCC_PPO_StopTm',
    '6800_00952600': 'PCC_PPO_DtSel'
};
exports.SMAObjects = SMAObjects;
var D2PConst;
(function (D2PConst) {
    D2PConst[D2PConst["Adj"] = 27] = "Adj";
    D2PConst[D2PConst["Alm"] = 35] = "Alm";
    D2PConst[D2PConst["None"] = 302] = "None";
    D2PConst[D2PConst["Off"] = 303] = "Off";
    D2PConst[D2PConst["OffGri"] = 304] = "OffGri";
    D2PConst[D2PConst["Ok"] = 307] = "Ok";
    D2PConst[D2PConst["On"] = 308] = "On";
    D2PConst[D2PConst["Stop"] = 381] = "Stop";
    D2PConst[D2PConst["Wrn"] = 455] = "Wrn";
    D2PConst[D2PConst["Run"] = 569] = "Run";
    D2PConst[D2PConst["PortalTst"] = 746] = "PortalTst";
    D2PConst[D2PConst["Active"] = 802] = "Active";
    D2PConst[D2PConst["InActive"] = 803] = "InActive";
    D2PConst[D2PConst["Usr"] = 861] = "Usr";
    D2PConst[D2PConst["Istl"] = 862] = "Istl";
    D2PConst[D2PConst["Svc"] = 863] = "Svc";
    D2PConst[D2PConst["Dvlp"] = 864] = "Dvlp";
    D2PConst[D2PConst["NoneMsg"] = 886] = "NoneMsg";
    D2PConst[D2PConst["S0EnMtr"] = 895] = "S0EnMtr";
    D2PConst[D2PConst["CmpPwrCtlMdul"] = 913] = "CmpPwrCtlMdul";
    D2PConst[D2PConst["CmpSnsMdul"] = 920] = "CmpSnsMdul";
    D2PConst[D2PConst["CmpIOMdul"] = 922] = "CmpIOMdul";
    D2PConst[D2PConst["CmpRS485Mdul"] = 923] = "CmpRS485Mdul";
    D2PConst[D2PConst["WCnst"] = 1077] = "WCnst";
    D2PConst[D2PConst["WCnstNom"] = 1078] = "WCnstNom";
    D2PConst[D2PConst["WCtlCom"] = 1079] = "WCtlCom";
    D2PConst[D2PConst["Yes"] = 1129] = "Yes";
    D2PConst[D2PConst["No"] = 1130] = "No";
    D2PConst[D2PConst["Do"] = 1146] = "Do";
    D2PConst[D2PConst["NoRev"] = 1319] = "NoRev";
    D2PConst[D2PConst["ModGri"] = 1440] = "ModGri";
    D2PConst[D2PConst["S0In"] = 1667] = "S0In";
    D2PConst[D2PConst["S0Out"] = 1668] = "S0Out";
    D2PConst[D2PConst["NotConn"] = 1725] = "NotConn";
    D2PConst[D2PConst["ComNok"] = 1719] = "ComNok";
    D2PConst[D2PConst["ConnAct"] = 1791] = "ConnAct";
    D2PConst[D2PConst["GnSrc"] = 1800] = "GnSrc";
    D2PConst[D2PConst["GriSrc"] = 1801] = "GriSrc";
    D2PConst[D2PConst["GriGnSrc"] = 1802] = "GriGnSrc";
    D2PConst[D2PConst["ConnSett"] = 2130] = "ConnSett";
    D2PConst[D2PConst["MsSpdwr"] = 2314] = "MsSpdwr";
    D2PConst[D2PConst["Percent"] = 2449] = "Percent";
    D2PConst[D2PConst["UsStp"] = 2506] = "UsStp";
    D2PConst[D2PConst["UsFlb"] = 2507] = "UsFlb";
    D2PConst[D2PConst["ConnFail"] = 3325] = "ConnFail";
    D2PConst[D2PConst["OnGriMod"] = 3550] = "OnGriMod";
    D2PConst[D2PConst["OffGriMod"] = 3551] = "OffGriMod";
    D2PConst[D2PConst["LimW"] = 3359] = "LimW";
    D2PConst[D2PConst["WlAcqNone"] = 3366] = "WlAcqNone";
    D2PConst[D2PConst["WlAcqAct"] = 3367] = "WlAcqAct";
    D2PConst[D2PConst["WlAcqNok"] = 3368] = "WlAcqNok";
    D2PConst[D2PConst["WlAcqOk"] = 3369] = "WlAcqOk";
    D2PConst[D2PConst["S0Wnd"] = 3371] = "S0Wnd";
    D2PConst[D2PConst["S0Pv"] = 3372] = "S0Pv";
    D2PConst[D2PConst["WpsIsAct"] = 3426] = "WpsIsAct";
    D2PConst[D2PConst["InsolSns20mA"] = 3502] = "InsolSns20mA";
    D2PConst[D2PConst["InsolSns10V"] = 3503] = "InsolSns10V";
    D2PConst[D2PConst["ConnSpdNone"] = 3581] = "ConnSpdNone";
    D2PConst[D2PConst["DpxModNone"] = 3582] = "DpxModNone";
    D2PConst[D2PConst["SwRevSttNone"] = 3583] = "SwRevSttNone";
    D2PConst[D2PConst["multiCluster"] = 3663] = "multiCluster";
    D2PConst[D2PConst["mainCluster"] = 3653] = "mainCluster";
    D2PConst[D2PConst["UpdRx"] = 3179] = "UpdRx";
    D2PConst[D2PConst["UpdExec"] = 3180] = "UpdExec";
    D2PConst[D2PConst["UpdOk"] = 3181] = "UpdOk";
    D2PConst[D2PConst["UpdNok"] = 3182] = "UpdNok";
    D2PConst[D2PConst["UpdSttNone"] = 3584] = "UpdSttNone";
    D2PConst[D2PConst["SMAEnergyMeter"] = 9327] = "SMAEnergyMeter";
    D2PConst[D2PConst["WattnoteModbusRTU"] = 9375] = "WattnoteModbusRTU";
    D2PConst[D2PConst["SunSpecModbusRTU"] = 9376] = "SunSpecModbusRTU";
    D2PConst[D2PConst["SMARevenueGradeMeter"] = 9437] = "SMARevenueGradeMeter";
    D2PConst[D2PConst["SelfTstDmdNone"] = 3585] = "SelfTstDmdNone";
    D2PConst[D2PConst["FstShtdownTigo"] = 4127] = "FstShtdownTigo";
    D2PConst[D2PConst["FstShtdownSma"] = 4128] = "FstShtdownSma";
    D2PConst[D2PConst["PVMdulCtl"] = 4233] = "PVMdulCtl";
    D2PConst[D2PConst["RSSI"] = 12025] = "RSSI";
    D2PConst[D2PConst["NaNStt"] = 16777213] = "NaNStt";
    D2PConst[D2PConst["EndOfTagLst"] = 16777214] = "EndOfTagLst";
})(D2PConst = exports.D2PConst || (exports.D2PConst = {}));
;
var UnitTags;
(function (UnitTags) {
    UnitTags[UnitTags["Percent"] = 1] = "Percent";
    UnitTags[UnitTags["DegreeCelsius"] = 2] = "DegreeCelsius";
    UnitTags[UnitTags["A"] = 3] = "A";
    UnitTags[UnitTags["h"] = 6] = "h";
    UnitTags[UnitTags["kWh"] = 8] = "kWh";
    UnitTags[UnitTags["mps"] = 9] = "mps";
    UnitTags[UnitTags["ohm"] = 11] = "ohm";
    UnitTags[UnitTags["s"] = 13] = "s";
    UnitTags[UnitTags["V"] = 14] = "V";
    UnitTags[UnitTags["WperSquareM"] = 17] = "WperSquareM";
    UnitTags[UnitTags["W"] = 18] = "W";
    UnitTags[UnitTags["Wh"] = 19] = "Wh";
    UnitTags[UnitTags["DegreeFahrenheit"] = 32] = "DegreeFahrenheit";
    UnitTags[UnitTags["min"] = 34] = "min";
    UnitTags[UnitTags["mA"] = 1266] = "mA";
    UnitTags[UnitTags["kOhm"] = 1269] = "kOhm";
    UnitTags[UnitTags["mOhm"] = 1270] = "mOhm";
    UnitTags[UnitTags["kW"] = 1275] = "kW";
    UnitTags[UnitTags["MW"] = 1276] = "MW";
    UnitTags[UnitTags["GW"] = 1277] = "GW";
    UnitTags[UnitTags["MWh"] = 1278] = "MWh";
    UnitTags[UnitTags["GWh"] = 1279] = "GWh";
    UnitTags[UnitTags["Ws"] = 1280] = "Ws";
    UnitTags[UnitTags["Byte"] = 283] = "Byte";
    UnitTags[UnitTags["KByte"] = 271] = "KByte";
    UnitTags[UnitTags["d"] = 4227] = "d";
})(UnitTags = exports.UnitTags || (exports.UnitTags = {}));
