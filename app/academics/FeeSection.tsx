import styles from "./Academics.module.css";

const bbaFees = {
  title: "Details Fees For BBA (HM)",
  headers: ["Items", "1st Sem", "2nd Sem", "3rd Sem", "4th Sem", "5th Sem", "6th Sem", "7th Sem", "8th Sem", "Total (Rs.)"],
  rows: [
    ["Admission Fees", "25,000", "-", "-", "-", "-", "-", "-", "-", "25,000"],
    ["Development Fees", "4,000", "4,000", "4,000", "4,000", "4,000", "4,000", "4,000", "4,000", "32,000"],
    ["Library Fees", "4,000", "-", "-", "-", "-", "-", "-", "-", "4,000"],
    ["Tuition Fees", "35,000", "35,000", "35,000", "35,000", "35,000", "30,000", "30,000", "30,000", "2,65,000"],
    ["Caution Money", "5,000", "-", "-", "-", "-", "-", "-", "-", "5,000"],
    ["Total (Rs.)", "73,000", "39,000", "39,000", "39,000", "39,000", "34,000", "34,000", "34,000", "3,15,000"]
  ]
};

const mhaFees = {
  title: "Details Fees For MHA",
  headers: ["Items", "1st Semester", "2nd Semester", "3rd Semester", "4th Semester", "Total (Rs.)"],
  rows: [
    ["Admission Fees", "55,789", "-", "-", "-", "55,789"],
    ["Development Fees", "6,974", "6,974", "6,974", "6,974", "27,896"],
    ["Library Fees", "6,974", "-", "-", "-", "6,974"],
    ["Tuition Fees", "1,18,641", "1,11,706", "1,04,770", "97,835", "4,32,952"],
    ["Caution Fee", "6,974", "-", "-", "-", "6,974"],
    ["Total", "1,95,352", "1,18,680", "1,11,744", "1,04,224", "5,30,000"]
  ]
};

function FeeTable({ table }: { table: typeof bbaFees }) {
  return (
    <article className={styles.feeCard}>
      <h3>{table.title}</h3>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              {table.headers.map((header) => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, index) => (
                  <td key={`${cell}-${index}`} className={index === 0 ? styles.rowLabel : ""}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default function FeeSection() {
  return (
    <section className={styles.feeSection}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Fee Structure</span>
          <h2>Transparent program fee details</h2>
        </div>
        <div className={styles.feeGrid}>
          <FeeTable table={bbaFees} />
          <FeeTable table={mhaFees} />
        </div>
      </div>
    </section>
  );
}
