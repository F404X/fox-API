const express = require('express');
const app = express();
const fs = require('fs')

const PORT = process.env.PORT || 1313;

/*

app.get('/endpoint*', (req, res) => {
	res.json({
		ptOne: [
			{
				ptTwo: "Oi :D",
				ptTwoTwo: "Hi :D"
			}
		]
	})
})


*/

app.get('/sobre', (req, res) => {
	res.json({
		criador: 'Fox'
	})
})

app.get('/face', (req, res) => {
	let rndFc = fs.readFileSync('./faces.txt').toString().split('\n')
	let randomFace = rndFc[Math.floor(Math.random() * rndFc.length)]

	res.json({
		face: randomFace
	})
})

app.get('/antivirus' (req, res) => {
	res.json({
		  scans: {
			Bkav: {
			  detected: false,
			  version: '1.3.0.9899',
			  result: null,
			  update: '20210409'
			},
			Elastic: {
			  detected: false,
			  version: '4.0.19',
			  result: null,
			  update: '20210407'
			},
			'MicroWorld-eScan': {
			  detected: true,
			  version: '14.0.409.0',
			  result: 'Trojan.Agent.CPHJ',
			  update: '20210409'
			},
			FireEye: {
			  detected: true,
			  version: '32.44.1.0',
			  result: 'Trojan.Agent.CPHJ',
			  update: '20210409'
			},
			'CAT-QuickHeal': {
			  detected: false,
			  version: '14.00',
			  result: null,
			  update: '20210409'
			},
			McAfee: {
			  detected: false,
			  version: '6.0.6.653',
			  result: null,
			  update: '20210409'
			},
			Cylance: {
			  detected: false,
			  version: '2.3.1.101',
			  result: null,
			  update: '20210409'
			},
			Zillya: {
			  detected: true,
			  version: '2.0.0.4337',
			  result: 'Tool.Inject.Win64.2',
			  update: '20210409'
			},
			SUPERAntiSpyware: {
			  detected: false,
			  version: '5.6.0.1032',
			  result: null,
			  update: '20210409'
			},
			Sangfor: {
			  detected: false,
			  version: '2.9.0.0',
			  result: null,
			  update: '20210402'
			},
			K7AntiVirus: {
			  detected: true,
			  version: '11.175.36882',
			  result: 'Unwanted-Program ( 004d38111 )',
			  update: '20210409'
			},
			Alibaba: {
			  detected: false,
			  version: '0.3.0.5',
			  result: null,
			  update: '20190527'
			},
			K7GW: {
			  detected: true,
			  version: '11.175.36889',
			  result: 'Unwanted-Program ( 004d38111 )',
			  update: '20210409'
			},
			CrowdStrike: {
			  detected: false,
			  version: '1.0',
			  result: null,
			  update: '20210203'
			},
			Baidu: {
			  detected: false,
			  version: '1.0.0.2',
			  result: null,
			  update: '20190318'
			},
			Cyren: {
			  detected: true,
			  version: '6.3.0.2',
			  result: 'W64/Injector.FYW',
			  update: '20210409'
			},
			Symantec: {
			  detected: false,
			  version: '1.14.0.0',
			  result: null,
			  update: '20210409'
			},
			'ESET-NOD32': {
			  detected: true,
			  version: '23107',
			  result: 'a variant of Win64/HackTool.Inject.A potentially unsafe',
			  update: '20210409'
			},
			'TrendMicro-HouseCall': {
			  detected: false,
			  version: '10.0.0.1040',
			  result: null,
			  update: '20210409'
			},
			Avast: {
			  detected: false,
			  version: '21.1.5827.0',
			  result: null,
			  update: '20210409'
			},
			ClamAV: {
			  detected: true,
			  version: '0.103.2.0',
			  result: 'Win.Malware.Cphj-9757363-0',
			  update: '20210409'
			},
			Kaspersky: {
			  detected: false,
			  version: '21.0.1.45',
			  result: null,
			  update: '20210409'
			},
			BitDefender: {
			  detected: true,
			  version: '7.2',
			  result: 'Trojan.Agent.CPHJ',
			  update: '20210409'
			},
			'NANO-Antivirus': {
			  detected: false,
			  version: '1.0.146.25279',
			  result: null,
			  update: '20210409'
			},
			Paloalto: {
			  detected: false,
			  version: '1.0',
			  result: null,
			  update: '20210409'
			},
			ViRobot: {
			  detected: false,
			  version: '2014.3.20.0',
			  result: null,
			  update: '20210409'
			},
			Tencent: {
			  detected: false,
			  version: '1.0.0.1',
			  result: null,
			  update: '20210409'
			},
			'Ad-Aware': {
			  detected: true,
			  version: '3.0.16.117',
			  result: 'Trojan.Agent.CPHJ',
			  update: '20210409'
			},
			Sophos: {
			  detected: true,
			  version: '1.0.2.0',
			  result: 'Generic ML PUA (PUA)',
			  update: '20210409'
			},
			Comodo: {
			  detected: false,
			  version: '33424',
			  result: null,
			  update: '20210409'
			},
			'F-Secure': {
			  detected: false,
			  version: '12.0.86.52',
			  result: null,
			  update: '20210331'
			},
			DrWeb: {
			  detected: false,
			  version: '7.0.49.9080',
			  result: null,
			  update: '20210409'
			},
			VIPRE: {
			  detected: true,
			  version: '91714',
			  result: 'Trojan.Win32.Generic!BT',
			  update: '20210409'
			},
			TrendMicro: {
			  detected: false,
			  version: '11.0.0.1006',
			  result: null,
			  update: '20210330'
			},
			CMC: {
			  detected: false,
			  version: '2.10.2019.1',
			  result: null,
			  update: '20210327'
			},
			Emsisoft: {
			  detected: true,
			  version: '2018.12.0.1641',
			  result: 'Trojan.Agent.CPHJ (B)',
			  update: '20210409'
			},
			SentinelOne: {
			  detected: false,
			  version: '5.0.0.20',
			  result: null,
			  update: '20210215'
			},
			GData: {
			  detected: true,
			  version: 'A:25.29277B:27.22599',
			  result: 'Trojan.Agent.CPHJ',
			  update: '20210409'
			},
			Jiangmin: {
			  detected: true,
			  version: '16.0.100',
			  result: 'HackTool.Injector.b',
			  update: '20210408'
			},
			Webroot: {
			  detected: false,
			  version: '1.0.0.403',
			  result: null,
			  update: '20210409'
			},
			Avira: {
			  detected: true,
			  version: '8.3.3.12',
			  result: 'TR/Agent.hcthf',
			  update: '20210409'
			},
			eGambit: {
			  detected: false,
			  version: null,
			  result: null,
			  update: '20210409'
			},
			MAX: {
			  detected: true,
			  version: '2019.9.16.1',
			  result: 'malware (ai score=88)',
			  update: '20210409'
			},
			'Antiy-AVL': {
			  detected: false,
			  version: '3.0.0.1',
			  result: null,
			  update: '20210409'
			},
			Kingsoft: {
			  detected: false,
			  version: '2017.9.26.565',
			  result: null,
			  update: '20210409'
			},
			Gridinsoft: {
			  detected: true,
			  version: '1.0.36.127',
			  result: 'Hack.Win64.Injector.ka!s1',
			  update: '20210409'
			},
			Arcabit: {
			  detected: true,
			  version: '1.0.0.881',
			  result: 'Trojan.Agent.CPHJ',
			  update: '20210409'
			},
			AegisLab: {
			  detected: false,
			  version: '4.2',
			  result: null,
			  update: '20210409'
			},
			ZoneAlarm: {
			  detected: false,
			  version: '1.0',
			  result: null,
			  update: '20210409'
			},
			Microsoft: {
			  detected: true,
			  version: '1.1.18000.5',
			  result: 'PUA:Win32/CoinMiner',
			  update: '20210409'
			},
			Cynet: {
			  detected: false,
			  version: '4.0.0.27',
			  result: null,
			  update: '20210409'
			},
			'AhnLab-V3': {
			  detected: false,
			  version: '3.19.7.10132',
			  result: null,
			  update: '20210409'
			},
			Acronis: {
			  detected: false,
			  version: '1.1.1.81',
			  result: null,
			  update: '20210211'
			},
			VBA32: {
			  detected: false,
			  version: '5.0.0',
			  result: null,
			  update: '20210409'
			},
			TACHYON: {
			  detected: false,
			  version: '2021-04-09.02',
			  result: null,
			  update: '20210409'
			},
			Malwarebytes: {
			  detected: true,
			  version: '4.2.1.18',
			  result: 'Bitcoin.Trojan.Miner.DDS',
			  update: '20210409'
			},
			APEX: {
			  detected: true,
			  version: '6.151',
			  result: 'Malicious',
			  update: '20210404'
			},
			Rising: {
			  detected: true,
			  version: '25.0.0.26',
			  result: 'HackTool.BlackBone!1.CF94 (CLASSIC)',
			  update: '20210409'
			},
			Yandex: {
			  detected: true,
			  version: '5.5.2.24',
			  result: 'Trojan.GenAsa!nJVgXUZFJlc',
			  update: '20210409'
			},
			Ikarus: {
			  detected: true,
			  version: '0.1.5.2',
			  result: 'PUA.HackTool.Inject',
			  update: '20210409'
			},
			MaxSecure: {
			  detected: false,
			  version: '1.0.0.1',
			  result: null,
			  update: '20210409'
			},
			Fortinet: {
			  detected: false,
			  version: '6.2.142.0',
			  result: null,
			  update: '20210409'
			},
			BitDefenderTheta: {
			  detected: false,
			  version: '7.2.37796.0',
			  result: null,
			  update: '20210402'
			},
			Cybereason: {
			  detected: true,
			  version: '1.2.449',
			  result: 'malicious.cbb5e3',
			  update: '20210330'
			},
			Panda: {
			  detected: false,
			  version: '4.6.4.2',
			  result: null,
			  update: '20210409'
			},
			'Qihoo-360': {
			  detected: false,
			  version: '1.0.0.1120',
			  result: null,
			  update: '20210409'
			}
		  },
		  scan_id: '7efeabbf1c0a5378f372f692943dd817bf8f4727a8da82cb2676ca6a6d7d3bb4-1618006465',
		  sha1: 'b72df040ee68b0cbaf6461a4496f3a059b82aac5',
		  resource: '7efeabbf1c0a5378f372f692943dd817bf8f4727a8da82cb2676ca6a6d7d3bb4',
		  response_code: 1,
		  scan_date: '2021-04-09 22:14:25',
		  permalink: 'https://www.virustotal.com/gui/file/7efeabbf1c0a5378f372f692943dd817bf8f4727a8da82cb2676ca6a6d7d3bb4/detection/f-7efeabbf1c0a5378f372f692943dd817bf8f4727a8da82cb2676ca6a6d7d3bb4-1618006465',
		  verbose_msg: 'Scan finished, information embedded',
		  total: 66,
		  positives: 26,
		  sha256: '7efeabbf1c0a5378f372f692943dd817bf8f4727a8da82cb2676ca6a6d7d3bb4',
		  md5: '3808960cbb5e39af84389a2507bf7aae'
		}
	})
})

app.get('/', (req, res) => {
	res.json({
		0: 'EndPoints:',
		1: '/sobre',
		2: '/face'
	})
})

app.listen(PORT, () => {
	console.log('Enter in port: ' + PORT)
})
