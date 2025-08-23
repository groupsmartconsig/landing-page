import axios from "axios"

import { NextRequest, NextResponse } from "next/server";
import { BrasilCardAnalysisFormData, BrasilCardAnalysisSchema } from "@/schemas/brasil-card-analysis-form";
import { format } from "date-fns";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { success, error, data: form } = BrasilCardAnalysisSchema.safeParse(body);

    if (!success) {
      return NextResponse.json(
        { error: error.issues },
        { status: 400 },
      );
    }

    if(form){
      const client: BrasilCardAnalysisFormData = form
      
      client.birth_day = format(client.birth_day, 'yyyy-mm-dd')
      client.cpf = client.cpf.replaceAll(".",'').replaceAll("-","")
      
      console.log(client)

      const login = await axios.post('http://127.0.0.1:3333/brasilcard/login',
        {
          "relative": "0144",
          "username": "MARINACHAGAS",
          "password": "5LCJYSNA",
          "captcha": "0.8FzGx1F_7MeEUZbA-nFbT_Kg-R2epzPk6CgTouToUp_cT6TaaD0HJPqfGUMuqqfFar8sbZAesUEjMsQg9a0wzA6QwwLTlYhCTHIDxPvTfYm8f_GUJ_yfBerFdL69j4_AaXloYZWSO4xQMVgF_8UZIIHxuw8tRiVhlt5cABFp1_ay--mOcZP7OOqwWNa31R3dmpiyoDgKlZam8mj4yuvuWr6mMA8-AHFWqb9LNSTZNCT2SsiDl0ehqI-1aPaJQiZs60i0D1jyT8tx9Gi7Uidhi53ie8fHDXpDosQOEMev4qSJv0xDFSe3CKJW7_YdbcnN8-NMxU6MZmbBcavALd6hEf79o3y871Obunz6py6crF3zdVDWXZPG1_e8Htp94F6rsJ0wy3QX1D90nK8yeJ607FAT23xoD0vBZl2xCNcJfTYW7xNFwUMp0bea7bzx4EZNQNKo99jDxEX3enftOz9vevF0p2AduZtAt5RNg2sPTGXT0DmjUg4gbK-Vw0apBn_ABPq0_uD0dAmrT56O4OFg_W5D0DAJmlm7L90hqcbQu4a7kamUAWdhArXbMOc_gw-9dyaEhyP4kV80lO2GVWdNV6gycy7dnpDc8RY--Buqv7as8lqeqZVOVukZhZ5c2fr2ijBLK99pg-JF6hRBt2P6ux5ecg9XMCTBWLRQDPW-s1OPW12vfHFD6FSkVFwspm0soCC6BveKvsD1twb5q_3pBpHNpiG3dPv3txETDwSgj6rIsVszqkKg7zSbnv1lfWJaP6z2g_fj0A7pg9RQDMCY6-JNsb89HZfzjUv777Lzx73z6NWMv590mHitt9IOhBiiVmB9IL5ZuEs11yT0Q_Uk8ZjVO70fgS4HpFVytTEKWwg_Mzm1i4o43r5LBjuElT08dE96HwssxKFzb9-k5ceMsVrnyHGZkZRwcxG7j03wOod578d0S6UQDgluKyAWY_sF.W6HquBQmqvWWTLTJ5boPsg.96e1655da5941f760c813cb6de1c2806a864de0ef7ff96b603d1781ac699da02"
        }
      )
        
      const response = await axios.post(
        'http://127.0.0.1:3333/brasilcard/simulate', 
        client, 
        {
          headers: {
            'Authorization': `${login.data.access_token}` 
          }
        }
      );
      
      return NextResponse.json(response.data);
    }
    
  } catch (error) {
    return NextResponse.json({ error }, {status: 500});
  }
}
