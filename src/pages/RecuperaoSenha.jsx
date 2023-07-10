import { Button, TextField, InputAdornment, Icon } from "@mui/material";
import styles from "./RecuperaoSenha.module.css";
const RecuperaoSenha = () => {
  return (
    <div className={styles.recuperaoSenha}>
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
        <div className={styles.btnVoltarParent}>
          <Button
            sx={{ width: 226 }}
            variant="outlined"
            color="secondary"
            href="/telalogin"
          >
            Voltar
          </Button>
          <Button
            sx={{ width: 226 }}
            variant="contained"
            color="secondary"
            href="/voltaraologin"
          >
            Continuar
          </Button>
        </div>
        <TextField
          className={styles.textField}
          sx={{ width: 468 }}
          color="secondary"
          variant="outlined"
          type="text"
          label="Usuário"
          placeholder="Insira seu usuário"
          size="medium"
          margin="none"
        />
        <div className={styles.paraRedefinirSua}>
          Para redefinir sua senha, insira seu usuário do Velis abaixo:
        </div>
        <img
          className={styles.logoHorizontalCorTagIcon}
          alt=""
          src="/logohorizontalcortag@2x.png"
        />
      </div>
    </div>
  );
};

export default RecuperaoSenha;
