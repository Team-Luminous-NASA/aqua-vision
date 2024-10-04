import styles from "@/styles/components/earth/cloud.module.css";

const SunCloud = () => {
  return (
    <div className={styles.sun_cloud_container}>
      <div className={styles.sun_cloud_cloud + " " + styles.sun_cloud_front}>
        <span className={styles.sun_cloud_left_front}></span>
        <span className={styles.sun_cloud_right_front}></span>
      </div>
      <span
        className={styles.sun_cloud_sun + " " + styles.sun_cloud_sunshine}
      ></span>
      <span className={styles.sun_cloud_sun}></span>
      <div className={styles.sun_cloud_cloud + " " + styles.sun_cloud_back}>
        <span className={styles.sun_cloud_left_back}></span>
        <span className={styles.sun_cloud_right_back}></span>
      </div>
    </div>
  );
};

export default SunCloud;
