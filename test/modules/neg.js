import T from '../setup'

T('negated', function () {

  function t(expected, n) {
    T.assertEqual(expected, new Decimal(n).neg().valueOf());
  }

  Decimal.config({
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -9e15,
    maxE: 9e15
  });

  t('-4', 4);
  t('-2147483648', 2147483648);
  t('-0.25', 0.25);
  t('-0.0625', 0.0625);
  t('-1', 1);
  t('1', -1);
  t('-0', 0);
  t('0', -0);
  t('-0', '0');
  t('0', '-0');
  t('NaN', NaN);
  t('NaN', 'NaN');
  t('-Infinity', Infinity);
  t('Infinity', -Infinity);
  t('-Infinity', 'Infinity');
  t('Infinity', '-Infinity');

  t('-9.99e+9000000000000000', '9.99e+9000000000000000');
  t('9.99e+9000000000000000', '-9.99e+9000000000000000');
  t('-Infinity', '1e+9000000000000001');
  t('Infinity', '-1e+9000000000000001');
  t('-1e-9000000000000000', '1e-9000000000000000');
  t('1e-9000000000000000', '-1e-9000000000000000');
  t('0', '-1e-9000000000000001');

  t('-238', '238');
  t('1.3e-11', '-0.000000000013');
  t('-33.1', '33.1');
  t('2.61', '-2.61');
  t('-4', '4.0');
  t('-5.8', '5.8');
  t('-3.52e-7', '0.000000352');
  t('190', '-190');
  t('4.47', '-4.47');
  t('6.9525e-12', '-0.0000000000069525');
  t('1.3', '-1.3');
  t('-6.21', '6.21');
  t('2', '-2');
  t('-1', '1');
  t('147.857', '-147.857');
  t('-26.517', '26.517');
  t('-3', '3');
  t('5', '-5');
  t('204', '-204');
  t('2.1e-8', '-0.000000021');
  t('3.7015e-7', '-0.00000037015');
  t('-50.1839', '50.1839');
  t('44768.1', '-44768.1');
  t('3.8e-15', '-0.0000000000000038');
  t('-7.4379', '7.4379');
  t('1.5', '-1.5');
  t('6.0399', '-6.0399');
  t('109.07', '-109.070');
  t('1582', '-1582');
  t('-772', '772');
  t('-6.7824e-14', '0.000000000000067824');
  t('-1.819e-8', '0.00000001819');
  t('-3e-15', '0.0000000000000030');
  t('-424120', '424120');
  t('-1814.54', '1814.54');
  t('-4.295e-17', '0.00000000000000004295');
  t('-5', '5');
  t('2152', '-2152');
  t('4.6', '-4.6');
  t('1.9', '-1.9');
  t('-2', '2.0');
  t('-0.00036', '0.00036');
  t('-0.000006962', '0.000006962');
  t('3.6', '-3.6');
  t('-1.1495e-14', '0.000000000000011495');
  t('-312.4', '312.4');
  t('4.3e-10', '-0.00000000043');
  t('5', '-5');
  t('-1.8911e-8', '0.000000018911');
  t('4963.53', '-4963.53');
  t('-4.3934e-10', '0.00000000043934');
  t('-1.3', '1.30');
  t('-1', '1.0');
  t('-68.32', '68.32');
  t('0.014836', '-0.014836');
  t('8', '-8');
  t('2.1351', '-2.13510');
  t('162224', '-162224');
  t('3e-19', '-0.00000000000000000030');
  t('0.00004985', '-0.00004985');
  t('28.9321', '-28.9321');
  t('-2', '2');
  t('-16688', '16688');
  t('-1', '1');
  t('5', '-5');
  t('-20', '20.0');
  t('-1.9', '1.9');
  t('3', '-3');
  t('185640', '-185640');
  t('-0.0000058', '0.0000058');
  t('9.67e-13', '-0.000000000000967');
  t('-707.98', '707.98');
  t('2.57917', '-2.57917');
  t('-1.3', '1.3');
  t('-4.2655', '4.2655');
  t('-149.6', '149.6');
  t('-1.32383', '1.32383');
  t('-26.925', '26.925');
  t('-0.00013', '0.00013');
  t('-6868', '6868');
  t('7', '-7');
  t('-5e-9', '0.0000000050');
  t('3.2555e-16', '-0.00000000000000032555');
  t('1.42768e-13', '-0.000000000000142768');
  t('11.2962', '-11.2962');
  t('3186.7', '-3186.7');
  t('-6.9', '6.9');
  t('-6.2618e-7', '0.00000062618');
  t('8', '-8');
  t('-8.04', '8.04');
  t('-22', '22');
  t('-750.6', '750.6');
  t('12.803', '-12.803');
  t('-20513.4', '20513.4');
  t('114781', '-114781');
  t('-16.9046', '16.9046');
  t('4.6e-7', '-0.00000046');
  t('-31399', '31399');
  t('1.04', '-1.04');
  t('-51.2544', '51.2544');
  t('1.023e-15', '-0.000000000000001023');
  t('281', '-281');
  t('-128315', '128315');
  t('20.2', '-20.2');
  t('9', '-9');
  t('-10', '10');
  t('-1.92262e-17', '0.0000000000000000192262');
  t('-0.0023', '0.0023');
  t('5', '-5');
  t('7', '-7');
  t('13.72', '-13.72');
  t('98068', '-98068');
  t('3.2', '-3.2');
  t('1.1', '-1.1');
  t('-3.97e-18', '0.000000000000000003970');
  t('0.00334824', '-0.00334824');
  t('-5.4892e-8', '0.000000054892');
  t('-1', '1.0');
  t('-2.8135e-8', '0.000000028135');
  t('-1.816e-13', '0.0000000000001816');
  t('199724', '-199724');
  t('-19.4', '19.40');
  t('-12.74', '12.74');
  t('-2171.8', '2171.8');
  t('-2.7', '2.7');
  t('1', '-1.0');
  t('21779', '-21779');
  t('8.9e-12', '-0.0000000000089');
  t('-4.51', '4.51');
  t('2.6', '-2.6');
  t('-0.00016', '0.000160');
  t('6', '-6');
  t('50.566', '-50.566');
  t('-16.2', '16.2');
  t('-9444', '9444');
  t('21.4', '-21.4');
  t('2.5', '-2.5');
  t('489311', '-489311');
  t('6.8', '-6.8');
  t('4.29', '-4.29');
  t('23982', '-23982.0');
  t('-0.0111781', '0.0111781');
  t('4.96e-20', '-0.0000000000000000000496');
  t('-40.5481', '40.5481');
  t('-32.52', '32.52');
  t('-7.4', '7.4');
  t('-5', '5.0');
  t('-2463.4', '2463.4');
  t('7.363', '-7.363');
  t('2.8', '-2.8');
  t('-14498', '14498');
  t('201', '-201');

  Decimal.toExpNeg = Decimal.toExpPos = 0;

  t('-5.0600621890668482322956892808849303e+20', '5.0600621890668482322956892808849303e+20');
  t('7e+0', '-7e+0');
  t('-6.1095374220609e+13', '6.1095374220609e+13');
  t('9.01e+2', '-9.01e+2');
  t('-1.016984074247269470395836690098169093010136836967e+39', '1.016984074247269470395836690098169093010136836967e+39');
  t('-1.497639134680472576e+18', '1.497639134680472576e+18');
  t('-4.1717657571404248e+16', '4.1717657571404248e+16');
  t('8.983272e+1', '-8.983272e+1');
  t('-5.308416e+6', '5.308416e+6');
  t('-2.09764e+3', '2.09764e+3');
  t('-3.83432050166120236679168e+23', '3.83432050166120236679168e+23');
  t('-4.096e+3', '4.096e+3');
  t('2.679971527468745095582058350756311201706813294321409e+51', '-2.679971527468745095582058350756311201706813294321409e+51');
  t('-5.067853299870089529116832768e+2', '5.067853299870089529116832768e+2');
  t('-3.48822062687911109850066182676769e+32', '3.48822062687911109850066182676769e+32');
  t('-1e+0', '1e+0');
  t('4.2773e+0', '-4.2773e+0');
  t('5.8169306081172252508071119604378757744768e+12', '-5.8169306081172252508071119604378757744768e+12');
  t('-1e+0', '1e+0');
  t('1.51655708279450944384385164853883404204414169862685507e+46', '-1.51655708279450944384385164853883404204414169862685507e+46');
  t('-8.1e+1', '8.1e+1');
  t('-1.296e+3', '1.296e+3');
  t('-2.9e+0', '2.9e+0');
  t('-1.764e+3', '1.764e+3');
  t('9.3418332730097368870513138581415704704611459349313e+49', '-9.3418332730097368870513138581415704704611459349313e+49');
});
