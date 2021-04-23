package com.mycompany.myapp.domain;

import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Order.
 */
@Entity
@Table(name = "jhi_order")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "loading_city")
    private String loading_city;

    @Column(name = "shipment_city")
    private String shipment_city;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order id(Long id) {
        this.id = id;
        return this;
    }

    public String getSubject() {
        return this.subject;
    }

    public Order subject(String subject) {
        this.subject = subject;
        return this;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getLoading_city() {
        return this.loading_city;
    }

    public Order loading_city(String loading_city) {
        this.loading_city = loading_city;
        return this;
    }

    public void setLoading_city(String loading_city) {
        this.loading_city = loading_city;
    }

    public String getShipment_city() {
        return this.shipment_city;
    }

    public Order shipment_city(String shipment_city) {
        this.shipment_city = shipment_city;
        return this;
    }

    public void setShipment_city(String shipment_city) {
        this.shipment_city = shipment_city;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Order)) {
            return false;
        }
        return id != null && id.equals(((Order) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Order{" +
            "id=" + getId() +
            ", subject='" + getSubject() + "'" +
            ", loading_city='" + getLoading_city() + "'" +
            ", shipment_city='" + getShipment_city() + "'" +
            "}";
    }
}
