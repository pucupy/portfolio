/**
 * @startingPoint section="Core" subtitle="Role, company and date range, one row" viewport="700x90"
 */
export interface ExperienceRowProps {
  role: string;
  company: string;
  /** e.g. "2016—Present" or "2014-2015" */
  dateRange: string;
}
