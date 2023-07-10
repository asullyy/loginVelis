import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./VoltarAoLogin.module.css";
const VoltarAoLogin = () => {
  return (
    <div className={styles.voltarAoLogin}>
      <div className={styles.plataformaDeForaContainer}>
        <p className={styles.plataformaDe}>{`Plataforma de `}</p>
        <p className={styles.plataformaDe}>
          <span className={styles.foraDeVendas}>Força de Vendas completa</span>
          <span>{` para `}</span>
        </p>
        <p className={styles.plataformaDe}>{`você e seu negócio `}</p>
      </div>
      <div className={styles.vVelisOriginal}>
        <div className={styles.vVelisOriginalChild} />
        <div className={styles.vVelisOriginalItem} />
      </div>
      <div className={styles.login}>
        <div className={styles.vVelisOriginal1}>
          <div className={styles.vVelisOriginalInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.plataformaDeParent}>
            <div className={styles.plataformaDe1}>
              <p className={styles.plataformaDe}>{`Plataforma de `}</p>
            </div>
            <div className={styles.para}>para</div>
            <div className={styles.vocESeu1}>você e seu negócio</div>
            <b className={styles.foraDeVendas1}>Força de Vendas</b>
            <b className={styles.completa}>completa</b>
          </div>
        </div>
        <Button
          className={styles.btnContinuar}
          sx={{ width: 468 }}
          variant="contained"
          color="secondary"
          href="/telalogin"
        >
          Voltar a tela de login
        </Button>
        <img
          className={styles.logoHorizontalCorTagIcon}
          alt=""
          src="/logohorizontalcortag@2x.png"
        />
        <div className={styles.casoAindaNoConsigaFazerLParent}>
          <div className={styles.casoAindaNoContainer}>
            <span>Caso ainda não consiga fazer login,</span>
            <span className={styles.span}>{` `}</span>
          </div>
          <Link className={styles.reenvieOEmail} to="/recuperaosenha">
            reenvie o email
          </Link>
          <div className={styles.ouEntreEm}>ou entre em</div>
          <div className={styles.contatoComO}>contato com o suporte</div>
        </div>
        <div className={styles.enviamosAVocContainer}>
          <span
            className={styles.enviamosAVoc}
          >{`Enviamos a você um email com um link para concluir a redefinição de senha.  Não esqueça de verificar sua `}</span>
          <span className={styles.pastaDeSpam}>pasta de spam</span>
          <span className={styles.enviamosAVoc}>
            {" "}
            caso não localize o email.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VoltarAoLogin;
